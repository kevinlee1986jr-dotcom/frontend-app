// Timestamp: 2025-11-09 01:05:49

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(date));
};

