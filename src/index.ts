import { MockMethod } from "./types/mock";
// my-vite-plugin.ts
import { Plugin } from "vite";

export type CustomMockMethod = MockMethod;

export default function vitePluginHybridMock(): Plugin {
  return {
    name: "vite-plugin-hybrid-mock",
    enforce: "post",
    transform(code, id) {
      if (id.endsWith("main.ts")) {
        // 在main.ts文件的末尾插入你想要运行的函数
        code += `
				import api from './../mock/api';
				import Mock from 'better-mock/dist/mock.mp';
				api.forEach((item) => {
					Mock.mock(item.url, item.method ?? 'get', item.response);
				});
				`;
      }
      return {
        code,
      };
    },
  };
}
