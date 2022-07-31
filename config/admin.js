module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd6a32a422c2cc081bf2ad21b223aa62'),
  },
});
