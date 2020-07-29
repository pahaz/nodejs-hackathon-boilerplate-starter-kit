// auto generated by kmigrator
// KMIGRATOR:0019_auto_20200729_1013:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMC42IG9uIDIwMjAtMDctMjkgMTA6MTMKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKaW1wb3J0IGRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24KCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMThfdXNlcl9tZXRhJyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSdvcmdhbml6YXRpb250b3VzZXJsaW5rJywKICAgICAgICAgICAgbmFtZT0nY29kZScsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5VVUlERmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlLCB1bmlxdWU9VHJ1ZSksCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSdvcmdhbml6YXRpb250b3VzZXJsaW5rJywKICAgICAgICAgICAgbmFtZT0nZW1haWwnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuVGV4dEZpZWxkKGRlZmF1bHQ9J25vQGV4YW1wbGUuY29tJyksCiAgICAgICAgICAgIHByZXNlcnZlX2RlZmF1bHQ9RmFsc2UsCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSdvcmdhbml6YXRpb250b3VzZXJsaW5rJywKICAgICAgICAgICAgbmFtZT0nbmFtZScsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWRkRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J29yZ2FuaXphdGlvbnRvdXNlcmxpbmsnLAogICAgICAgICAgICBuYW1lPSdwaG9uZScsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWRkRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3VzZXInLAogICAgICAgICAgICBuYW1lPSdpc0VtYWlsVmVyaWZpZWQnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuQm9vbGVhbkZpZWxkKGRlZmF1bHQ9RmFsc2UpLAogICAgICAgICAgICBwcmVzZXJ2ZV9kZWZhdWx0PUZhbHNlLAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5BZGRGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0ndXNlcicsCiAgICAgICAgICAgIG5hbWU9J2lzUGhvbmVWZXJpZmllZCcsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5Cb29sZWFuRmllbGQoZGVmYXVsdD1GYWxzZSksCiAgICAgICAgICAgIHByZXNlcnZlX2RlZmF1bHQ9RmFsc2UsCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J29yZ2FuaXphdGlvbnRvdXNlcmxpbmsnLAogICAgICAgICAgICBuYW1lPSd1c2VyJywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLkZvcmVpZ25LZXkoYmxhbms9VHJ1ZSwgZGJfY29sdW1uPSd1c2VyJywgbnVsbD1UcnVlLCBvbl9kZWxldGU9ZGphbmdvLmRiLm1vZGVscy5kZWxldGlvbi5ET19OT1RISU5HLCByZWxhdGVkX25hbWU9JysnLCB0bz0nX2RqYW5nb19zY2hlbWEudXNlcicpLAogICAgICAgICksCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field code to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" ADD COLUMN "code" uuid NULL UNIQUE;
--
-- Add field email to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" ADD COLUMN "email" text DEFAULT 'no@example.com' NOT NULL;
ALTER TABLE "OrganizationToUserLink" ALTER COLUMN "email" DROP DEFAULT;
--
-- Add field name to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" ADD COLUMN "name" text NULL;
--
-- Add field phone to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" ADD COLUMN "phone" text NULL;
--
-- Add field isEmailVerified to user
--
ALTER TABLE "User" ADD COLUMN "isEmailVerified" boolean DEFAULT false NOT NULL;
ALTER TABLE "User" ALTER COLUMN "isEmailVerified" DROP DEFAULT;
--
-- Add field isPhoneVerified to user
--
ALTER TABLE "User" ADD COLUMN "isPhoneVerified" boolean DEFAULT false NOT NULL;
ALTER TABLE "User" ALTER COLUMN "isPhoneVerified" DROP DEFAULT;
--
-- Alter field user on organizationtouserlink
--
SET CONSTRAINTS "OrganizationToUserLink_user_d86c251a_fk_User_id" IMMEDIATE; ALTER TABLE "OrganizationToUserLink" DROP CONSTRAINT "OrganizationToUserLink_user_d86c251a_fk_User_id";
ALTER TABLE "OrganizationToUserLink" ALTER COLUMN "user" DROP NOT NULL;
ALTER TABLE "OrganizationToUserLink" ADD CONSTRAINT "OrganizationToUserLink_user_d86c251a_fk_User_id" FOREIGN KEY ("user") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field user on organizationtouserlink
--
SET CONSTRAINTS "OrganizationToUserLink_user_d86c251a_fk_User_id" IMMEDIATE; ALTER TABLE "OrganizationToUserLink" DROP CONSTRAINT "OrganizationToUserLink_user_d86c251a_fk_User_id";
ALTER TABLE "OrganizationToUserLink" ALTER COLUMN "user" SET NOT NULL;
ALTER TABLE "OrganizationToUserLink" ADD CONSTRAINT "OrganizationToUserLink_user_d86c251a_fk_User_id" FOREIGN KEY ("user") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
--
-- Add field isPhoneVerified to user
--
ALTER TABLE "User" DROP COLUMN "isPhoneVerified" CASCADE;
--
-- Add field isEmailVerified to user
--
ALTER TABLE "User" DROP COLUMN "isEmailVerified" CASCADE;
--
-- Add field phone to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" DROP COLUMN "phone" CASCADE;
--
-- Add field name to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" DROP COLUMN "name" CASCADE;
--
-- Add field email to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" DROP COLUMN "email" CASCADE;
--
-- Add field code to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" DROP COLUMN "code" CASCADE;
COMMIT;

    `)
}
