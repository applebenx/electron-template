export interface AppAPI {
  api1(): string;
}

export const AppAPI: AppAPI = {
  api1() {
    return "api1";
  },
};
