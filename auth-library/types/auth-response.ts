
export interface AuthResponse {
  principalId: string;
  policyDocument?: PolicyDocument;
}

export interface PolicyDocument {
  Version: string;
  Statement: Statement[]
}

export interface Statement {
  Effect: any;
  Resource: any;
  Action: string;
}

// Policy helper function
export const generatePolicy = (principalId: string | object, effect, resource) => {
  const authResponse: AuthResponse = {
    principalId: principalId,
  };

  if (effect && resource) {
    const policyDocument: PolicyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        }
      ]
    };
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};
