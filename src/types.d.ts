import * as React from 'react';

declare module 'react-error-boundary' {
  export interface FallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
  }

  export interface ErrorBoundaryProps {
    children?: React.ReactNode;  // Add this line
    FallbackComponent: React.ComponentType<FallbackProps>;
    onReset?: () => void;
    onError?: (error: Error, info: { componentStack: string }) => void;
  }

  export class ErrorBoundary extends React.Component<ErrorBoundaryProps> { }
}
