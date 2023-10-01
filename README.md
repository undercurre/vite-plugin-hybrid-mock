# vite-plugin-hybrid-mock

## 作用

提供给使用 uniapp 等跨端框架和 vite 构建工具的开发者一个统一的 mock 方案

## 原理

使用 vite 的 [transform](https://rollupjs.org/plugin-development/#transform) 钩子注入代码，强依赖 [better-mock](https://www.npmjs.com/package/better-mock)（改进版 mock）来提供 mock 服务

## 使用指南

在 vite.config.ts 中

```ts
import vitePluginHybridMock from "vite-plugin-hybrid-mock";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vitePluginHybridMock()],
});
```

其中能导出 CustomMockMethod 用于定义要 Mock 的接口实例

```ts
import type { CustomMockMethod } from "vite-plugin-hybrid-mock";
```

按照该目录结果进行 mock 的编写

```
// 根目录
- `src/`：存放源代码文件的目录
- `mock/`：存放mock文件的目录
    - `api/`：
        - `index.ts`：导出所有 CustomMockMethod, 也就是一个CustomMockMethod[]
    - `model/`：
        - `index.ts`：导出接口中的所有模型实体如: userModel
```
