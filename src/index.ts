type Opts =
    | string
    | {
          trim?: boolean;
          replacement?: string;
          lowercase?: boolean;
      };

export default function slugizer(str: string, opts?: Opts) {
    const defaultOpts: Opts = {
        trim: true,
        replacement: "-",
        lowercase: true,
    };

    if (typeof opts === "string") {
        opts = { ...defaultOpts, replacement: opts };
    } else {
        opts = { ...defaultOpts, ...opts };
    }

    if (opts.trim) {
        str = str.trim();
    }

    let slug = str.replace(/[^a-zA-Z0-9]/g, opts.replacement as string);

    if (opts.lowercase) {
        slug = slug.toLowerCase();
    }

    return slug;
}
