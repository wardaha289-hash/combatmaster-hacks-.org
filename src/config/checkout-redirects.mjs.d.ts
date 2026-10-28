export declare const COMBAT_MASTER_CHECKOUT_URL: string;
export declare const HWID_SPOOFER_CHECKOUT_URL: string;

export declare const CHECKOUT_URLS: {
  readonly combatMaster: string;
  readonly hwidSpoofer: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
