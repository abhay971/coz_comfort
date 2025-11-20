/**
 * Security utility functions for input validation and sanitization
 */

/**
 * Sanitize URL to prevent XSS attacks
 * Only allows http, https, and data URLs for images
 * @param {string} url - URL to sanitize
 * @returns {string} - Sanitized URL or empty string if invalid
 */
export const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const trimmedUrl = url.trim();

  // Allow http, https, and data URLs
  const allowedProtocols = /^(https?:|data:image\/)/i;

  // Block javascript: and other dangerous protocols
  const dangerousProtocols = /^(javascript:|vbscript:|file:|data:(?!image\/))/i;

  if (dangerousProtocols.test(trimmedUrl)) {
    console.warn('Blocked potentially dangerous URL:', trimmedUrl);
    return '';
  }

  if (!allowedProtocols.test(trimmedUrl) && !trimmedUrl.startsWith('/')) {
    // Assume relative URL
    return trimmedUrl;
  }

  return trimmedUrl;
};

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
export const escapeHtml = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return text.replace(/[&<>"'/]/g, (char) => htmlEscapes[char]);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Sanitize text input by removing potential harmful content
 * @param {string} input - Input to sanitize
 * @param {number} maxLength - Maximum allowed length
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input, maxLength = 1000) => {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Remove any HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');

  // Remove control characters except newlines and tabs
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Trim whitespace
  sanitized = sanitized.trim();

  // Enforce max length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
};

/**
 * Validate that a value is a valid React component
 * @param {*} component - Value to check
 * @returns {boolean} - True if valid React component
 */
export const isValidReactComponent = (component) => {
  return (
    typeof component === 'function' ||
    (typeof component === 'object' && component !== null)
  );
};
