type Opts =
    | string
    | {
          trim?: boolean;
          replace?: string;
          lower?: boolean;
      };

export default function slugizer(str: string, opts?: Opts) {
    const defaultOpts: Opts = {
        trim: true,
        replace: "-",
        lower: true,
    };

    if (typeof opts === "string") {
        opts = { ...defaultOpts, replace: opts };
    } else {
        opts = { ...defaultOpts, ...opts };
    }

    if (opts.trim) {
        str = str.trim();
    }

    let slug = str.replace(/[^a-zA-Z0-9]/g, opts.replace as string);

    if (opts.lower) {
        slug = slug.toLowerCase();
    }

    return slug;
}
