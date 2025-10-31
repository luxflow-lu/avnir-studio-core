/**
 * Contact Configuration per Site
 */

export interface ContactConfig {
  appPasswordEnv: string;
  recipient: string;
  subject: string;
}

export const contactConfig: Record<string, ContactConfig> = {
  muzidev: {
    appPasswordEnv: "MUZIDEV_APP_PASSWORD",
    recipient: "contact@muzidev.com",
    subject: "Contact depuis MUZIDEV",
  },
  muzipics: {
    appPasswordEnv: "MUZIPICS_APP_PASSWORD",
    recipient: "contact@muzipics.com",
    subject: "Contact depuis MUZIPICS",
  },
  muzisystem: {
    appPasswordEnv: "MUZISYSTEM_APP_PASSWORD",
    recipient: "contact@muzisystem.com",
    subject: "Contact depuis MUZISYSTEM",
  },
  muzimerch: {
    appPasswordEnv: "MUZIMERCH_APP_PASSWORD",
    recipient: "contact@muzimerch.com",
    subject: "Contact depuis MUZIMERCH",
  },
  muzitools: {
    appPasswordEnv: "MUZITOOLS_APP_PASSWORD",
    recipient: "contact@muzitools.com",
    subject: "Contact depuis MUZITOOLS",
  },
  "avnir-studio": {
    appPasswordEnv: "AVNIR_STUDIO_APP_PASSWORD",
    recipient: "contact@avnir-studio.com",
    subject: "Contact depuis AVNIR-Studio",
  },
};
