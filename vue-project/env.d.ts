/// <reference types="vite/client" />

// 解决模块找不到的报错
declare module "*.vue" {
    import { App, defineComponent } from "vue";
    const component: ReturnType<typeof defineComponent> & {
        install(app: App): void;
    };
    export default component;
}

// 解决引入报错
declare module 'rem-fit'
