export default function bugIssueTemplate(sentryEventId: string): string {
  return `## Error Report

Sentry Event ID: ${sentryEventId}

Please describe what happened and what you expected to happen.

## Steps to reproduce

1. 
2. 
3. 

## Environment

- Browser: 
- Version: 
- OS: 
`;
} 