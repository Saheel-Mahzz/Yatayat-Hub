export interface ActionState<T> {
  success: boolean;
  error: null | Record<string, string>;
  message: string | null;
  data: T | null;
}
