export type Error = {
  message: string;
  domain: string;
  reason: string;
};
export type FirebaseError = {
  code: number;
  errors: Error[];
  message: string;
};

export type ErrorRespose = {
  error: FirebaseError;
};
