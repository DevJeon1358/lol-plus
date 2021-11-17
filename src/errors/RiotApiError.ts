export interface RiotErrorResponse {
  status: RiotErrorInfo;
}

export interface RiotErrorInfo {
  message: string;
  status_code: number;
}

export class RiotApiError extends Error {
  readonly statusCode: number;
  constructor(body: RiotErrorResponse) {
    if (!body.status) {
      throw new Error('Invaild Error Response');
    }

    super(body.status.message);
    this.statusCode = body.status.status_code;
  }
}
