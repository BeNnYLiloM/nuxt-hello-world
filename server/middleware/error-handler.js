export default defineEventHandler((event) => {
  const statusCode = getRequestURL(event).searchParams.get('statusCode');
  const statusCodeNumber = typeof statusCode === 'string' ? parseInt(statusCode) : 0

  if (statusCodeNumber === 404 || statusCodeNumber >= 500) {
    setResponseHeader(event, "cache-control", "no-cache, no-store, must-revalidate");
  }
})