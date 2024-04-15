import { createClient } from "next-sanity";



import { apiVersion, dataset, projectId, useCdn } from "../env";


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // token:
  //   "skdHNLi5PzO89J0FCiVb2aTouoJWG15BjhC3thQBrI5V0YBMFwVZtJyE5OIRx3JWfQVGYbGUii3eNbXandK8VW5QB4vuHcEJCPzuSRd90s6gvUbRjHS7KhWApkV2TuubdJ2rcJ0qjU8GxYxMdNMo1Wa3W45HHpBNiRfuLsfhNOFkgG4gQY7i",
})