declare global {
  /**
   * Shared kernel
   */

  /**
   * ⚠️ FSD
   *
   * This is a hacky way to export Redux types inferred from @/app
   * and use them in @/shared/model/hooks.ts
   */
  declare type AppStore = import('../src/app/appStore').AppStore;
  declare type RootState = import('../src/app/appStore').RootState;
  declare type AppDispatch = import('../src/app/appStore').AppDispatch;
}

export {};
