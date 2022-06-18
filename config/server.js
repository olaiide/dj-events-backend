module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd75476af6e55c64943a31659f4828018'),
    },
  },
});
