import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Check, Clock, Crown, Dumbbell, Facebook, FileText, Film, Flower2, Heart, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Pill, Plane, Send, Shield, ShoppingBag, Sparkles, Stethoscope, Truck, Users, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-VOeL9pfc.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Plano Nacional Funerária — Assistência 24h e Planos Familiares" },
			{
				name: "description",
				content: "Plano Nacional Funerária: serviços funerários particulares com dignidade, planos de assistência familiar a partir de R$ 17,90 e floricultura com entrega rápida. Atendimento 24h em BH e Ribeirão das Neves."
			},
			{
				name: "author",
				content: "Plano Nacional Funerária"
			},
			{
				property: "og:title",
				content: "Plano Nacional Funerária — Assistência 24h e Planos Familiares"
			},
			{
				property: "og:description",
				content: "Plano Nacional Funerária: serviços funerários particulares com dignidade, planos de assistência familiar a partir de R$ 17,90 e floricultura com entrega rápida. Atendimento 24h em BH e Ribeirão das Neves."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Plano Nacional Funerária — Assistência 24h e Planos Familiares"
			},
			{
				name: "twitter:description",
				content: "Plano Nacional Funerária: serviços funerários particulares com dignidade, planos de assistência familiar a partir de R$ 17,90 e floricultura com entrega rápida. Atendimento 24h em BH e Ribeirão das Neves."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/caa1074d-9bab-47b4-9c51-9a408eb48ade/id-preview-4bf7afd5--1f589d9b-04c8-4007-bf0d-b0b3ae755f9a.lovable.app-1781546450062.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/caa1074d-9bab-47b4-9c51-9a408eb48ade/id-preview-4bf7afd5--1f589d9b-04c8-4007-bf0d-b0b3ae755f9a.lovable.app-1781546450062.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
var logo_plano_nacional_jpeg_asset_default = {
	version: 1,
	asset_id: "66c27b0a-8976-490f-9609-e28d3e19a178",
	project_id: "1f589d9b-04c8-4007-bf0d-b0b3ae755f9a",
	url: "/__l5e/assets-v1/66c27b0a-8976-490f-9609-e28d3e19a178/logo-plano-nacional.jpeg",
	r2_key: "a/v1/1f589d9b-04c8-4007-bf0d-b0b3ae755f9a/66c27b0a-8976-490f-9609-e28d3e19a178/logo-plano-nacional.jpeg",
	original_filename: "logo-plano-nacional.jpeg",
	size: 77158,
	content_type: "image/jpeg",
	created_at: "2026-06-15T17:54:01Z"
};
//#endregion
//#region src/routes/index.tsx
var Route = createFileRoute("/")({ component: LandingPage });
var WHATSAPP = "https://w.app/krlrlm";
var PHONE_DISPLAY = "(31) 3272-5307";
var PHONE_TEL = "tel:+553132725307";
var EMAIL = "assistencialplanonaciol@gmail.com";
var BRAND = "Plano Nacional";
var BRAND_SUB = "Funerária";
function useReveal() {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("fade-up");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
	return ref;
}
function LandingPage() {
	return /* @__PURE__ */ jsxs("div", {
		ref: useReveal(),
		className: "min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(ServicosFuneral, {}),
			/* @__PURE__ */ jsx(Planos, {}),
			/* @__PURE__ */ jsx(Floricultura, {}),
			/* @__PURE__ */ jsx(Fechamento, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(WhatsAppFloat, {})
		]
	});
}
function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const links = [
		{
			href: "#servicos",
			label: "Serviços"
		},
		{
			href: "#planos",
			label: "Planos"
		},
		{
			href: "#floricultura",
			label: "Floricultura"
		},
		{
			href: "#contato",
			label: "Contato"
		}
	];
	return /* @__PURE__ */ jsx("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: "glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "#topo",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-gold/40 glow-gold",
							children: /* @__PURE__ */ jsx("img", {
								src: logo_plano_nacional_jpeg_asset_default.url,
								alt: "Plano Nacional Funerária",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-sm font-bold tracking-tight",
								children: BRAND
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: BRAND_SUB
							})]
						})]
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "hidden items-center gap-8 lg:flex",
						children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: l.href,
							className: "text-sm font-medium text-foreground/80 transition-colors hover:text-gold",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noopener",
							className: "hidden items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground transition-transform hover:scale-[1.03] pulse-gold sm:inline-flex",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), "Emergência 24h"]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setOpen((v) => !v),
							className: "grid h-10 w-10 place-items-center rounded-xl glass-light lg:hidden",
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}), open && /* @__PURE__ */ jsx("div", {
				className: "glass mt-2 rounded-2xl p-4 lg:hidden",
				children: /* @__PURE__ */ jsxs("ul", {
					className: "flex flex-col gap-1",
					children: [links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "block rounded-lg px-3 py-3 text-sm font-medium hover:bg-white/5",
						children: l.label
					}) }, l.href)), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noopener",
						className: "mt-2 flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-gold-foreground",
						children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Emergência 24h"]
					}) })]
				})
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "topo",
		className: "relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 -z-10 opacity-50",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/20 blur-3xl" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				"data-reveal": true,
				className: "opacity-0",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-gold" })]
						}), "Atendimento Ativo 24h · 7 dias"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
						children: [
							"Dignidade, cuidado e",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent",
								children: "presença humana"
							}),
							" ",
							"em todos os momentos."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: "Assistência funerária premium com atendimento imediato 24 horas, planos familiares acessíveis e uma equipe dedicada a acolher sua família com respeito e excelência."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noopener",
							className: "group inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-4 text-base font-bold text-gold-foreground transition-all hover:scale-[1.02] glow-gold",
							children: [
								/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
								"Assistência Imediata 24h",
								/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
							]
						}), /* @__PURE__ */ jsx("a", {
							href: "#planos",
							className: "inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-white/10",
							children: "Conhecer Planos Familiares"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid grid-cols-3 gap-4 max-w-md",
						children: [
							{
								n: "24h",
								l: "Atendimento"
							},
							{
								n: "+30",
								l: "Anos de tradição"
							},
							{
								n: "100%",
								l: "Humanizado"
							}
						].map((s) => /* @__PURE__ */ jsxs("div", {
							className: "glass rounded-2xl px-4 py-4 text-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-2xl font-bold text-gold",
								children: s.n
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-1 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: s.l
							})]
						}, s.l))
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				"data-reveal": true,
				className: "relative opacity-0",
				children: /* @__PURE__ */ jsx("div", {
					className: "glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-1 glow-emerald",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-primary/40 via-background to-secondary",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 grid place-items-center p-10",
								children: /* @__PURE__ */ jsx("div", {
									className: "float relative",
									children: /* @__PURE__ */ jsx("div", {
										className: "grid place-items-center rounded-full bg-gradient-to-br from-gold/30 to-transparent p-6 backdrop-blur-sm",
										children: /* @__PURE__ */ jsx("div", {
											className: "overflow-hidden rounded-full ring-4 ring-gold/40 glow-gold",
											children: /* @__PURE__ */ jsx("img", {
												src: logo_plano_nacional_jpeg_asset_default.url,
												alt: "Plano Nacional Funerária",
												className: "h-56 w-56 object-cover sm:h-64 sm:w-64"
											})
										})
									})
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute bottom-6 left-6 right-6 glass rounded-2xl p-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/20",
										children: /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-gold" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm font-semibold",
											children: "Protegido por especialistas"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-muted-foreground",
											children: "Equipe própria, sigilo total"
										})]
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute -right-2 top-10 glass rounded-2xl px-4 py-3 float",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold",
										children: "Resposta < 15min"
									})]
								})
							})
						]
					})
				})
			})]
		})]
	});
}
var SERVICOS = [
	{
		icon: FileText,
		title: "Documentação Legal",
		desc: "Cartório, certidões, autorizações e toda a burocracia conduzida pela nossa equipe."
	},
	{
		icon: Sparkles,
		title: "Preparação Avançada",
		desc: "Tanatopraxia e cuidados estéticos realizados por profissionais especializados."
	},
	{
		icon: Flower2,
		title: "Ornamentação Premium",
		desc: "Urnas selecionadas, arranjos florais sob medida e ambientação com elegância."
	},
	{
		icon: Plane,
		title: "Translado Nacional & Internacional",
		desc: "Logística completa para qualquer destino, com agilidade e total segurança."
	}
];
function ServicosFuneral() {
	return /* @__PURE__ */ jsx("section", {
		id: "servicos",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					"data-reveal": true,
					className: "mx-auto max-w-2xl text-center opacity-0",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold",
							children: "Funeral Particular"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl",
							children: [
								"Arranjo funeral particular com",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "excelência absoluta"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: "Estrutura completa, sigilo e atendimento personalizado para honrar a memória de quem você ama."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: SERVICOS.map((s, i) => /* @__PURE__ */ jsxs("div", {
						"data-reveal": true,
						style: { animationDelay: `${i * 80}ms` },
						className: "glass group relative overflow-hidden rounded-3xl p-6 opacity-0 transition-all hover:-translate-y-1 hover:glow-emerald",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" }), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 ring-1 ring-gold/30",
									children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6 text-gold" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 text-lg font-bold",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								})
							]
						})]
					}, s.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					"data-reveal": true,
					className: "mt-12 flex flex-col items-center gap-4 opacity-0",
					children: [/* @__PURE__ */ jsxs("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noopener",
						className: "group inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-4 text-base font-bold text-gold-foreground transition-all hover:scale-[1.02] glow-gold",
						children: ["Solicitar Orçamento Instantâneo", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Resposta em poucos minutos · sem compromisso"
					})]
				})
			]
		})
	});
}
var PLANOS = [
	{
		nome: "Individual",
		desc: "Para o titular",
		preco: "17,90",
		dep: "Apenas titular"
	},
	{
		nome: "Família 5",
		desc: "Titular + 5 dependentes",
		preco: "29,90",
		dep: "6 pessoas"
	},
	{
		nome: "Família 7",
		desc: "Titular + 7 dependentes",
		preco: "39,90",
		dep: "8 pessoas",
		destaque: true
	},
	{
		nome: "Família 10",
		desc: "Titular + 10 dependentes",
		preco: "49,90",
		dep: "11 pessoas"
	},
	{
		nome: "Família 14",
		desc: "Titular + 14 dependentes",
		preco: "59,90",
		dep: "15 pessoas"
	}
];
var BENEFICIOS = [
	{
		icon: Crown,
		label: "Urna Mortuária"
	},
	{
		icon: Flower2,
		label: "Ornamentação"
	},
	{
		icon: Sparkles,
		label: "Tanatopraxia"
	},
	{
		icon: Heart,
		label: "Coroa de Flores"
	},
	{
		icon: Stethoscope,
		label: "Clínicas Parceiras"
	},
	{
		icon: Stethoscope,
		label: "Rede de Dentistas"
	},
	{
		icon: Pill,
		label: "Farmácias com Desconto"
	},
	{
		icon: Dumbbell,
		label: "Academias Parceiras"
	},
	{
		icon: Film,
		label: "Cinemas com Desconto"
	}
];
function Planos() {
	return /* @__PURE__ */ jsx("section", {
		id: "planos",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					"data-reveal": true,
					className: "mx-auto max-w-2xl text-center opacity-0",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold",
							children: "Planos Familiares"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl",
							children: [
								"Proteja quem você ama por",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "menos de R$ 0,60 por dia"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: "Planos acessíveis, sem carência abusiva e com benefícios reais para toda a família."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
					children: PLANOS.map((p, i) => /* @__PURE__ */ jsxs("div", {
						"data-reveal": true,
						style: { animationDelay: `${i * 70}ms` },
						className: `relative flex flex-col rounded-3xl p-6 opacity-0 transition-all hover:-translate-y-1 ${p.destaque ? "bg-gradient-to-b from-gold/20 via-card to-card ring-1 ring-gold/40 glow-gold" : "glass hover:glow-emerald"}`,
						children: [
							p.destaque && /* @__PURE__ */ jsx("span", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground",
								children: "Mais escolhido"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Users, { className: `h-4 w-4 ${p.destaque ? "text-gold" : "text-primary"}` }), /* @__PURE__ */ jsx("span", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: p.dep
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-2 text-lg font-bold",
								children: p.nome
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-baseline gap-1",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-sm text-muted-foreground",
										children: "R$"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "font-display text-4xl font-bold",
										children: p.preco
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-sm text-muted-foreground",
										children: "/mês"
									})
								]
							}),
							/* @__PURE__ */ jsx("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noopener",
								className: `mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${p.destaque ? "bg-gold text-gold-foreground hover:scale-[1.02]" : "bg-white/5 text-foreground hover:bg-white/10"}`,
								children: "Contratar"
							})
						]
					}, p.nome))
				}),
				/* @__PURE__ */ jsx("div", {
					"data-reveal": true,
					className: "mt-16 glass rounded-3xl p-6 opacity-0 sm:p-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 lg:grid-cols-[1fr_2fr]",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-2xl font-bold sm:text-3xl",
							children: ["Benefícios ", /* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "inclusos"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Todo plano vem com cobertura completa e uma poderosa rede de descontos em estabelecimentos parceiros."
						})] }), /* @__PURE__ */ jsx("ul", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: BENEFICIOS.map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/30 ring-1 ring-primary/40",
									children: /* @__PURE__ */ jsx(Check, {
										className: "h-5 w-5 text-gold",
										strokeWidth: 3
									})
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2 text-sm font-medium",
									children: [/* @__PURE__ */ jsx(b.icon, { className: "h-4 w-4 text-muted-foreground" }), b.label]
								})]
							}, b.label))
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					"data-reveal": true,
					className: "mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 p-8 text-center opacity-0 glow-emerald sm:p-10",
					children: /* @__PURE__ */ jsxs("p", {
						className: "font-display text-2xl font-bold sm:text-3xl",
						children: [
							"Todas as vantagens, tudo incluso",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "em um plano só."
							})
						]
					})
				})
			]
		})
	});
}
var COROAS = [
	{ nome: "Coroa Tradicional" },
	{ nome: "Coroa Premium Lírios" },
	{ nome: "Coroa Especial Rosas" },
	{ nome: "Coroa Luxo Imperial" },
	{ nome: "Coroa Eternidade" },
	{ nome: "Coroa Memorial Gold" }
];
function Floricultura() {
	return /* @__PURE__ */ jsx("section", {
		id: "floricultura",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsxs("div", {
				"data-reveal": true,
				className: "mx-auto max-w-2xl text-center opacity-0",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "inline-block rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold",
						children: "Floricultura"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl",
						children: ["Coroas de flores com ", /* @__PURE__ */ jsx("span", {
							className: "text-gold",
							children: "entrega expressa"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: "Arranjos elaborados por floristas com flores frescas. Entrega em qualquer velório da cidade em até 60 minutos."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: COROAS.map((c, i) => /* @__PURE__ */ jsxs("article", {
					"data-reveal": true,
					style: { animationDelay: `${i * 70}ms` },
					className: "glass group flex flex-col overflow-hidden rounded-3xl opacity-0 transition-all hover:-translate-y-1 hover:glow-emerald",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/40 via-secondary to-background",
						children: [/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ jsx(Flower2, { className: "h-24 w-24 text-gold/60 transition-transform group-hover:scale-110" })
						}), /* @__PURE__ */ jsxs("span", {
							className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground",
							children: [/* @__PURE__ */ jsx(Truck, { className: "h-3 w-3" }), "Entrega Rápida"]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-1 flex-col gap-4 p-5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-bold",
							children: c.nome
						}), /* @__PURE__ */ jsxs("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noopener",
							className: "mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]",
							children: [/* @__PURE__ */ jsx(MessageCircle, {
								className: "h-4 w-4",
								fill: "currentColor"
							}), "Comprar via WhatsApp"]
						})]
					})]
				}, c.nome))
			})]
		})
	});
}
function Fechamento() {
	return /* @__PURE__ */ jsx("section", {
		id: "contato",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ jsxs("div", {
				"data-reveal": true,
				className: "relative overflow-hidden rounded-[2rem] p-8 opacity-0 sm:p-14",
				style: { background: "linear-gradient(135deg, oklch(0.28 0.07 160) 0%, oklch(0.22 0.05 160) 60%, oklch(0.18 0.04 160) 100%)" },
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" }),
					/* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold",
								children: "Fale com um consultor"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
								children: [
									"Deseja proteger sua família ou",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-gold",
										children: "contratar um plano agora?"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "Fale diretamente com um de nossos consultores comerciais e tire todas as suas dúvidas em poucos minutos."
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-8 space-y-3",
								children: [
									"Atendimento humano em até 2 minutos",
									"Sem burocracia, contratação 100% online",
									"Consultoria gratuita e sem compromisso"
								].map((t) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "grid h-6 w-6 place-items-center rounded-full bg-gold",
										children: /* @__PURE__ */ jsx(Check, {
											className: "h-3.5 w-3.5 text-gold-foreground",
											strokeWidth: 3
										})
									}), t]
								}, t))
							})
						] }), /* @__PURE__ */ jsx("div", {
							className: "flex justify-center lg:justify-end",
							children: /* @__PURE__ */ jsxs("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noopener",
								className: "group relative inline-flex items-center gap-3 rounded-2xl bg-gold px-7 py-5 text-base font-bold text-gold-foreground transition-all hover:scale-[1.03] sm:text-lg glow-gold pulse-gold",
								children: [
									/* @__PURE__ */ jsx(MessageCircle, {
										className: "h-6 w-6",
										fill: "currentColor"
									}),
									"Falar com Vendedor no WhatsApp",
									/* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1" })
								]
							})
						})]
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-white/10 bg-black/20 py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-gold/40",
								children: /* @__PURE__ */ jsx("img", {
									src: logo_plano_nacional_jpeg_asset_default.url,
									alt: "Plano Nacional Funerária",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-display text-sm font-bold",
									children: BRAND
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
									children: BRAND_SUB
								})]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Acolhendo famílias com dignidade, presença e excelência. Assistência funerária e planos familiares com atendimento humano 24 horas."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-semibold text-gold",
							children: [/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }), " Suporte 24h · 7 dias"]
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-sm font-bold uppercase tracking-wider text-gold",
						children: "Nossas Unidades"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-4 space-y-4 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
								className: "block font-semibold text-foreground",
								children: "Unidade Nova Gameleira"
							}), "Rua Oscar Negrão de Lima, 364 — Nova Gameleira"] })]
						}), /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
								className: "block font-semibold text-foreground",
								children: "Unidade Veneza"
							}), "Av. Dionísio Gomes, 1014 — Veneza, Ribeirão das Neves"] })]
						})]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold uppercase tracking-wider text-gold",
							children: "Contato"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: PHONE_TEL,
									className: "flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold",
									children: [
										/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-gold" }),
										" ",
										PHONE_DISPLAY
									]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: `mailto:${EMAIL}`,
									className: "flex items-start gap-2 break-all text-muted-foreground transition-colors hover:text-gold",
									children: [
										/* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
										" ",
										EMAIL
									]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: WHATSAPP,
									target: "_blank",
									rel: "noopener",
									className: "flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 text-gold" }), " WhatsApp"]
								}) })
							]
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "mt-6 text-sm font-bold uppercase tracking-wider text-gold",
							children: "Navegação"
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								["Serviços", "#servicos"],
								["Planos", "#planos"],
								["Floricultura", "#floricultura"],
								["Contato", "#contato"]
							].map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: h,
								className: "text-muted-foreground transition-colors hover:text-gold",
								children: l
							}) }, h))
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold uppercase tracking-wider text-gold",
							children: "Redes sociais"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex gap-3",
							children: [
								Instagram,
								Facebook,
								Send,
								ShoppingBag
							].map((I, i) => /* @__PURE__ */ jsx("a", {
								href: "#",
								className: "grid h-10 w-10 place-items-center rounded-xl glass-light transition-colors hover:bg-gold hover:text-gold-foreground",
								"aria-label": "social",
								children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" })
							}, i))
						}),
						/* @__PURE__ */ jsxs("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noopener",
							className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-gold-foreground glow-gold",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Emergência 24h"]
						})
					] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BRAND,
					" ",
					BRAND_SUB,
					". Todos os direitos reservados."
				] }), /* @__PURE__ */ jsx("p", { children: "Atendimento 24h · 7 dias por semana" })]
			})]
		})
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ jsx("a", {
		href: WHATSAPP,
		target: "_blank",
		rel: "noopener",
		"aria-label": "Falar no WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 pulse-gold sm:h-16 sm:w-16",
		children: /* @__PURE__ */ jsx(MessageCircle, {
			className: "h-7 w-7 sm:h-8 sm:w-8",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
