export function clamp(value: number, lower: number, upper: number) {
	return Math.min(upper, Math.max(lower, value));
}
