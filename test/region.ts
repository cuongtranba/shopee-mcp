// The unit-test fixtures are Indonesian listings (Rp prices, Indonesian labels),
// and several formatters fall back to the region's currency and timezone, which
// src/browser/session.ts reads from SHOPEE_DOMAIN once, at import time. Imported
// first by test/unit.ts so the suite depends on neither the default domain nor a
// developer's .env (dotenv never overrides a variable that is already set).
process.env.SHOPEE_DOMAIN = 'shopee.co.id';
