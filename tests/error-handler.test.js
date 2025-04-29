// tests/server/middleware/error-handler.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import errorHandler from '../server/middleware/error-handler';

// Мокируем defineEventHandler, который используется в middleware
vi.mock('#imports', () => ({
  defineEventHandler: (handler) => handler,
}));

describe('Error Handler Middleware', () => {
  let mockEvent;
  let originalSetHeader;
  let originalWriteHead;
  
  beforeEach(() => {
    // Создаем моки для функций и объектов
    originalSetHeader = vi.fn();
    originalWriteHead = vi.fn();
    
    // Создаем мок для event объекта, который передается в middleware
    mockEvent = {
      node: {
        res: {
          setHeader: originalSetHeader,
          writeHead: originalWriteHead,
        },
      },
    };
  });
  
  it('должен установить Cache-Control заголовок при статусе 404', async () => {
    // Вызываем middleware с нашим мок-объектом
    await errorHandler(mockEvent);
    
    // Получаем новую функцию writeHead, которая была установлена middleware
    const modifiedWriteHead = mockEvent.node.res.writeHead;
    
    // Вызываем модифицированную функцию writeHead со статусом 404
    modifiedWriteHead(404);
    
    // Проверяем, что originalSetHeader был вызван с правильными параметрами
    expect(originalSetHeader).toHaveBeenCalledWith(
      'Cache-Control', 
      'no-cache, no-store, must-revalidate'
    );
    
    // Проверяем, что originalWriteHead был вызван с правильным статусом
    expect(originalWriteHead).toHaveBeenCalledWith(404);
  });
  
  it('должен установить Cache-Control заголовок при статусе 500', async () => {
    // Вызываем middleware с нашим мок-объектом
    await errorHandler(mockEvent);
    
    // Получаем новую функцию writeHead, которая была установлена middleware
    const modifiedWriteHead = mockEvent.node.res.writeHead;
    
    // Вызываем модифицированную функцию writeHead со статусом 500
    modifiedWriteHead(500);
    
    // Проверяем, что originalSetHeader был вызван с правильными параметрами
    expect(originalSetHeader).toHaveBeenCalledWith(
      'Cache-Control', 
      'no-cache, no-store, must-revalidate'
    );
    
    // Проверяем, что originalWriteHead был вызван с правильным статусом
    expect(originalWriteHead).toHaveBeenCalledWith(500);
  });
  
  it('должен установить Cache-Control заголовок при статусе 503', async () => {
    // Вызываем middleware с нашим мок-объектом
    await errorHandler(mockEvent);
    
    // Получаем новую функцию writeHead, которая была установлена middleware
    const modifiedWriteHead = mockEvent.node.res.writeHead;
    
    // Вызываем модифицированную функцию writeHead со статусом 503
    modifiedWriteHead(503);
    
    // Проверяем, что originalSetHeader был вызван с правильными параметрами
    expect(originalSetHeader).toHaveBeenCalledWith(
      'Cache-Control', 
      'no-cache, no-store, must-revalidate'
    );
    
    // Проверяем, что originalWriteHead был вызван с правильным статусом
    expect(originalWriteHead).toHaveBeenCalledWith(503);
  });
  
  it('НЕ должен устанавливать Cache-Control заголовок при статусе 200', async () => {
    // Вызываем middleware с нашим мок-объектом
    await errorHandler(mockEvent);
    
    // Получаем новую функцию writeHead, которая была установлена middleware
    const modifiedWriteHead = mockEvent.node.res.writeHead;
    
    // Сбрасываем состояние моков перед проверкой
    originalSetHeader.mockClear();
    
    // Вызываем модифицированную функцию writeHead со статусом 200
    modifiedWriteHead(200);
    
    // Проверяем, что originalSetHeader НЕ был вызван с параметрами Cache-Control
    expect(originalSetHeader).not.toHaveBeenCalledWith(
      'Cache-Control', 
      'no-cache, no-store, must-revalidate'
    );
    
    // Проверяем, что originalWriteHead был вызван с правильным статусом
    expect(originalWriteHead).toHaveBeenCalledWith(200);
  });
  
  it('должен корректно обрабатывать дополнительные аргументы в writeHead', async () => {
    // Вызываем middleware с нашим мок-объектом
    await errorHandler(mockEvent);
    
    // Получаем новую функцию writeHead, которая была установлена middleware
    const modifiedWriteHead = mockEvent.node.res.writeHead;
    
    // Создаем тестовые заголовки
    const headers = { 'Content-Type': 'application/json' };
    
    // Вызываем модифицированную функцию writeHead со статусом 500 и заголовками
    modifiedWriteHead(500, headers);
    
    // Проверяем, что originalSetHeader был вызван с правильными параметрами
    expect(originalSetHeader).toHaveBeenCalledWith(
      'Cache-Control', 
      'no-cache, no-store, must-revalidate'
    );
    
    // Проверяем, что originalWriteHead был вызван с правильными параметрами
    expect(originalWriteHead).toHaveBeenCalledWith(500, headers);
  });
});