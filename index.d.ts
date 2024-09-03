/**
 * Returns false from the given parameters.
 *
 * @param {"yes"|"no"} loggingEnabled - Indicates whether logging should be enabled.
 * @param {"yes"|"no"} shouldDoSomethingAsync - A pointless option that indicates whether something should be done asynchronously that just waits 200ms before saying "Did something async"
 * @param {"yes"|"no"} shouldDoSomethingAsyncWithIsTenThousand - Indicates whether something should be done asynchronously when checking the self equality of 10,000 using the isTenThousand module (credits to james-work-account)
 * @param {"yes"|"no"} disableAprilFoolsSideEffects - Indicates whether April Fools side effects should be disabled.
 * @param {"yes"|"no"} definitelyDisableAprilFoolsSideEffects - Indicates whether April Fools side effects should be definitely disabled.
 * @param {"yes"|"no"} strictDisableAprilFoolsSideEffectsCheck - Indicates whether strict checking for disabling April Fools side effects should be enabled.
 *
 * @returns {boolean} - The calculated boolean value 'false'.
 */

export function False(loggingEnabled?: "yes" | "no", shouldDoSomethingAsync?: "yes" | "no", shouldDoSomethingAsyncWithIsTenThousand?: "yes" | "no", disableAprilFoolsSideEffects?: "yes" | "no", definitelyDisableAprilFoolsSideEffects?: "yes" | "no", strictDisableAprilFoolsSideEffectsCheck?: "yes" | "no"): boolean;
/**
 * Checks if a given value is false.
 *
 * @param {any} value - The value to be checked.
 * @returns {boolean} - True if the value is false, false otherwise.
 */

export function isFalse(value: any): boolean;
export function injectIntojQuery(): void;
export function expressMiddleware(req: any, res: any, next: any): void;