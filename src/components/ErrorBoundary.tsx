'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          role="alert"
          className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground p-6 text-center"
        >
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="text-muted-foreground max-w-md">
            We're sorry. The page encountered an error. Please refresh to try again.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="rounded-md bg-foreground px-4 py-2 text-background font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
