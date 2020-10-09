CREATE TABLE IF NOT EXISTS qr_code (
  id UUID PRIMARY KEY NOT NULL DEFAULT GEN_RANDOM_UUID(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  receiver_email TEXT NOT NULL,
  receiver_first_name TEXT NOT NULL,
  receiver_surname TEXT NOT NULL,
  location_type TEXT NOT NULL,
  location_name TEXT NOT NULL,
  location_address TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL
);