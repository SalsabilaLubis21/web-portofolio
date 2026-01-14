"use client";
import React from "react";
import { ContainerScroll } from "@/app/components/helper/container-scroll-animation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const certifications = [
  {
    name: "JPMorgan Chase & Co - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Agu 2025",
    credentialId: "JG2WGR7GRBAJJXFWU",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_WMmmzFc5WXi76nA6q_1755782371815_completion_certificate.pdf",
    skills: "Java · Spring Boot · Apache Kafka · REST APIs",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQEhb_j1_sDRJQ/company-logo_200_200/company-logo_200_200/0/1720817595519/theforage_logo?e=1769644800&v=beta&t=6-9JlstJ1y8ql7TdUS9zatE62gcu_FIrGi34tC9R9lc",
  },
  {
    name: "Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Agu 2025",
    credentialId: "a130f9f1-fd01-4c53-b105-bc850430df2c",
    credentialUrl:
      "https://www.credly.com/badges/a130f9f1-fd01-4c53-b105-bc850430df2c/public_url",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_200_200/B4EZgOay6gHEAQ-/0/1752588562343/amazon_web_services_logo?e=1769644800&v=beta&t=KJ9CKEV1phZaBj_SPcxPrFJIVZV6j-tsF2QzkuhPt-Y",
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "Agu 2025",
    credentialId: "5dc2e4926fa0",
    credentialUrl: "https://www.hackerrank.com/certificates/5dc2e4926fa0",
    skills: "Python (Programming Language)",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_200_200/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1769644800&v=beta&t=E_4xqeW0il1sR89HZnrWvpAsOJHididmEh4-GA0RXSg",
  },
  {
    name: "Software Engineer Certificate",
    issuer: "HackerRank",
    date: "Agu 2025",
    credentialId: "3f884ff00de2",
    credentialUrl:
      "https://www.hackerrank.com/certificates/iframe/3f884ff00de2",
    skills: "SQL · REST APIs",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_200_200/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1769644800&v=beta&t=E_4xqeW0il1sR89HZnrWvpAsOJHididmEh4-GA0RXSg",
  },
  {
    name: "Introduction to Flutter Course",
    issuer: "Simplilearn",
    date: "Jul 2025",
    credentialId: "8713479",
    credentialUrl:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMjk3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODcxMzQ3OV83OTk2OTA3MTc1Mzk0MzQ2ODQxMy5wbmciLCJ1c2VybmFtZSI6IlNhbHNhYmlsYSBMdWJpcyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4951%2FIntroduction-to-Flutter-Course-Online%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1539962094646301592&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN44KDsrzS3EuCkuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAEVmcrtBAAAA",
    skills: "Flutter",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/C510BAQEvNU0EYy6wUw/company-logo_200_200/company-logo_200_200/0/1631319527790?e=1769644800&v=beta&t=uEkUxnFnWaQ_-6xbxweDr6JDbn88rUDb39dwUe9paTY",
  },
  {
    name: "Programming Foundations with Python",
    issuer: "CodeSignal",
    date: "Feb 2025",
    credentialId: "cm6c4fx2i001owzips5uda3g0",
    credentialUrl:
      "https://codesignal.com/learn/certificates/cm6c4fx2i001owzips5uda3g0/courses/99",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D4E0BAQGyX-PDrYzgdA/company-logo_200_200/company-logo_200_200/0/1665512197811/codesignal_logo?e=1769644800&v=beta&t=fS-0s6qN8pmjjVesSAkc_Z9NrWy75ReeqSjq9j46L9U",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    date: "Feb 2025",
    credentialId: "e2209f79-56bc-4d9f-bdb7-68c48984adec",
    credentialUrl: "",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQFYnR_Zrm87Dg/company-logo_200_200/B56ZnMyVr4HUAI-/0/1760077372453/cisco_logo?e=1769644800&v=beta&t=k6urZUhxVEdWqybTgkKSfhzEB4DYialmMjblXrb_FaE",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "Feb 2025",
    credentialId: "21d7e00c-3bc3-46b4-83b3-458c979802c8",
    credentialUrl:
      "https://www.credly.com/badges/21d7e00c-3bc3-46b4-83b3-458c979802c8/linked_in_profile",
    skills: "Python (Programming Language)",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_200_200/company-logo_200_200/0/1688684715866/ibm_logo?e=1770249600&v=beta&t=ZhyHQzANNpzFAc4R5Odd8I2777ZsVT2Yi8MfGlRj0B0",
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "Jan 2025",
    credentialId: "EE92DF6AF8B2",
    credentialUrl: "https://www.hackerrank.com/certificates/ee92df6af8b2",
    skills: "Java",
    issuerLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_200_200/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1769644800&v=beta&t=E_4xqeW0il1sR89HZnrWvpAsOJHididmEh4-GA0RXSg",
  },
];

export default function CertificationsSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex justify-center my-5 lg:py-8">
              <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                  My Certifications
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              </div>
            </div>
          </>
        }
      >
        <div
          className={`${inter.className} relative w-full bg-white p-4 sm:p-6 rounded-2xl shadow-lg h-[40rem] md:h-[50rem] overflow-y-auto pb-16`}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <img
                  src={cert.issuerLogo}
                  alt={`${cert.issuer} logo`}
                  className="w-12 h-12 sm:w-16 sm:h-16 mr-4 rounded-md border border-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Issued {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">
                      Credential ID {cert.credentialId}
                    </p>
                  )}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Show credential ↗
                  </a>
                </div>
              </div>

              {cert.skills && (
                <div className="flex items-center my-4">
                  <p className="text-sm font-semibold text-gray-800 mr-2">
                    Skills:
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {cert.skills}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}
