type Opts =
    | string
    | {
          replacement?: string;
          lowercase?: boolean;
      };

export default function slugizer(str: string, opts?: Opts) {
    const defaultOpts: Opts = {
        replacement: "-",
        lowercase: true,
    };

    if (typeof opts === "string") {
        opts = { ...defaultOpts, replacement: opts };
    } else {
        opts = { ...defaultOpts, ...opts };
    }

    let slug = str.replace(/[^a-zA-Z0-9]/g, opts.replacement as string);

    if (opts.lowercase) {
        slug = slug.toLowerCase();
    }

    return slug;
}
