import { isPromise } from "@tanstack/router-core";
//#region node_modules/@tanstack/start-client-core/dist/esm/createMiddleware.js
var createMiddleware = (options, __opts) => {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		validator: (validator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { validator }));
		},
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
};
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createStart.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
function dedupeOptions(options) {
	if (options.serializationAdapters) {
		const deduped = /* @__PURE__ */ new Set();
		dedupeSerializationAdapters(deduped, options.serializationAdapters);
		options.serializationAdapters = Array.from(deduped);
	}
	return options;
}
var createStart = (getOptions) => {
	return {
		getOptions: () => {
			const options = getOptions();
			return isPromise(options) ? Promise.resolve(options).then(dedupeOptions) : dedupeOptions(options);
		},
		createMiddleware
	};
};
//#endregion
export { createMiddleware as n, createStart as t };
