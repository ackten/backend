export interface IEvent {
  id: string;
  name: string;
  description?: string;
  addedAt: number;
  startingOn?: number;
}

export interface Company {
  name: string;
  credentials: Credentials;
}

export interface Credentials {
  github: GitHubCredentials;
  jira: JiraCredentials;
  slack: SlackCredentials;
}

export interface GitHubCredentials {
  token: string;
  host: string;
  ghUser: string;
}

export interface JiraCredentials {
  username: string;
  password: string;
  host: string;
}

export interface SlackCredentials {
  channel: SlackChannel[];
}

export interface SlackChannel {
  webhook: string;
  name: string;
}
