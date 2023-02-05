export const hackPortalConfig: HackPortalConfig = {
  //registration fields are separated by question topics (general, school, hackathon experience, etc. )
  //each question topic is separated by question types(textInput, numberInput, dropdown, etc. )
  //  which hold all the questions of that type
  //add extra questions types(even ones already used) to question topics and add more questions under each question type
  //questions are displayed on page in order
  registrationFields: {
    //Question Topic
    generalQuestions: [
      {
        textInputQuestions: [
          {
            //don't remove; for user account info
            question: 'First Name',
            id: 'firstName',
            name: 'firstName',
            required: true,
            initialValue: '',
          },
          {
            //don't remove; for user account info
            question: 'Last Name',
            id: 'lastName',
            name: 'lastName',
            required: true,
            initialValue: '',
          },
          {
            //don't remove; for user account info
            question: 'Email',
            id: 'email',
            name: 'preferredEmail',
            required: true,
            initialValue: '',
          },
        ],
      },
      {
        numberInputQuestions: [
          {
            //Age question
            question: 'Age',
            required: true,
            id: 'age',
            name: 'age',
            min: '1',
            max: '100',
            pattern: '[0-9]+',
            initialValue: null,
          },
          {
            question: 'Phone Number',
            required: true,
            id: 'phoneNumber',
            name: 'phoneNumber',
            min: '1',
            max: '100',
            pattern: '[0-9]+',
            initialValue: null,
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Gender question
            question: 'Gender',
            required: true,
            id: 'gender',
            name: 'gender',
            initialValue: '',
            options: [
              {
                title: 'Female',
                value: 'Female',
              },
              {
                title: 'Male',
                value: 'Male',
              },
              {
                title: 'Other',
                value: 'Other',
              },
              {
                title: 'Prefer not to say',
                value: 'notSay',
              },
            ],
          },
          //Country of Residence
          {
            question: 'Country of Residence',
            required: true,
            id: 'country',
            name: 'country',
            initialValue: '',
            options: [
              { title: 'Afghanistan', value: 'AF' },
              { title: 'Åland Islands', value: 'AX' },
              { title: 'Albania', value: 'AL' },
              { title: 'Algeria', value: 'DZ' },
              { title: 'American Samoa', value: 'AS' },
              { title: 'AndorrA', value: 'AD' },
              { title: 'Angola', value: 'AO' },
              { title: 'Anguilla', value: 'AI' },
              { title: 'Antarctica', value: 'AQ' },
              { title: 'Antigua and Barbuda', value: 'AG' },
              { title: 'Argentina', value: 'AR' },
              { title: 'Armenia', value: 'AM' },
              { title: 'Aruba', value: 'AW' },
              { title: 'Australia', value: 'AU' },
              { title: 'Austria', value: 'AT' },
              { title: 'Azerbaijan', value: 'AZ' },
              { title: 'Bahamas', value: 'BS' },
              { title: 'Bahrain', value: 'BH' },
              { title: 'Bangladesh', value: 'BD' },
              { title: 'Barbados', value: 'BB' },
              { title: 'Belarus', value: 'BY' },
              { title: 'Belgium', value: 'BE' },
              { title: 'Belize', value: 'BZ' },
              { title: 'Benin', value: 'BJ' },
              { title: 'Bermuda', value: 'BM' },
              { title: 'Bhutan', value: 'BT' },
              { title: 'Bolivia', value: 'BO' },
              { title: 'Bosnia and Herzegovina', value: 'BA' },
              { title: 'Botswana', value: 'BW' },
              { title: 'Bouvet Island', value: 'BV' },
              { title: 'Brazil', value: 'BR' },
              { title: 'British Indian Ocean Territory', value: 'IO' },
              { title: 'Brunei Darussalam', value: 'BN' },
              { title: 'Bulgaria', value: 'BG' },
              { title: 'Burkina Faso', value: 'BF' },
              { title: 'Burundi', value: 'BI' },
              { title: 'Cambodia', value: 'KH' },
              { title: 'Cameroon', value: 'CM' },
              { title: 'Canada', value: 'CA' },
              { title: 'Cape Verde', value: 'CV' },
              { title: 'Cayman Islands', value: 'KY' },
              { title: 'Central African Republic', value: 'CF' },
              { title: 'Chad', value: 'TD' },
              { title: 'Chile', value: 'CL' },
              { title: 'China', value: 'CN' },
              { title: 'Christmas Island', value: 'CX' },
              { title: 'Cocos (Keeling) Islands', value: 'CC' },
              { title: 'Colombia', value: 'CO' },
              { title: 'Comoros', value: 'KM' },
              { title: 'Congo', value: 'CG' },
              { title: 'Congo, The Democratic Republic of the', value: 'CD' },
              { title: 'Cook Islands', value: 'CK' },
              { title: 'Costa Rica', value: 'CR' },
              { title: "Cote D'Ivoire", value: 'CI' },
              { title: 'Croatia', value: 'HR' },
              { title: 'Cuba', value: 'CU' },
              { title: 'Cyprus', value: 'CY' },
              { title: 'Czech Republic', value: 'CZ' },
              { title: 'Denmark', value: 'DK' },
              { title: 'Djibouti', value: 'DJ' },
              { title: 'Dominica', value: 'DM' },
              { title: 'Dominican Republic', value: 'DO' },
              { title: 'Ecuador', value: 'EC' },
              { title: 'Egypt', value: 'EG' },
              { title: 'El Salvador', value: 'SV' },
              { title: 'Equatorial Guinea', value: 'GQ' },
              { title: 'Eritrea', value: 'ER' },
              { title: 'Estonia', value: 'EE' },
              { title: 'Ethiopia', value: 'ET' },
              { title: 'Falkland Islands (Malvinas)', value: 'FK' },
              { title: 'Faroe Islands', value: 'FO' },
              { title: 'Fiji', value: 'FJ' },
              { title: 'Finland', value: 'FI' },
              { title: 'France', value: 'FR' },
              { title: 'French Guiana', value: 'GF' },
              { title: 'French Polynesia', value: 'PF' },
              { title: 'French Southern Territories', value: 'TF' },
              { title: 'Gabon', value: 'GA' },
              { title: 'Gambia', value: 'GM' },
              { title: 'Georgia', value: 'GE' },
              { title: 'Germany', value: 'DE' },
              { title: 'Ghana', value: 'GH' },
              { title: 'Gibraltar', value: 'GI' },
              { title: 'Greece', value: 'GR' },
              { title: 'Greenland', value: 'GL' },
              { title: 'Grenada', value: 'GD' },
              { title: 'Guadeloupe', value: 'GP' },
              { title: 'Guam', value: 'GU' },
              { title: 'Guatemala', value: 'GT' },
              { title: 'Guernsey', value: 'GG' },
              { title: 'Guinea', value: 'GN' },
              { title: 'Guinea-Bissau', value: 'GW' },
              { title: 'Guyana', value: 'GY' },
              { title: 'Haiti', value: 'HT' },
              { title: 'Heard Island and Mcdonald Islands', value: 'HM' },
              { title: 'Holy See (Vatican City State)', value: 'VA' },
              { title: 'Honduras', value: 'HN' },
              { title: 'Hong Kong', value: 'HK' },
              { title: 'Hungary', value: 'HU' },
              { title: 'Iceland', value: 'IS' },
              { title: 'India', value: 'IN' },
              { title: 'Indonesia', value: 'ID' },
              { title: 'Iran, Islamic Republic Of', value: 'IR' },
              { title: 'Iraq', value: 'IQ' },
              { title: 'Ireland', value: 'IE' },
              { title: 'Isle of Man', value: 'IM' },
              { title: 'Israel', value: 'IL' },
              { title: 'Italy', value: 'IT' },
              { title: 'Jamaica', value: 'JM' },
              { title: 'Japan', value: 'JP' },
              { title: 'Jersey', value: 'JE' },
              { title: 'Jordan', value: 'JO' },
              { title: 'Kazakhstan', value: 'KZ' },
              { title: 'Kenya', value: 'KE' },
              { title: 'Kiribati', value: 'KI' },
              { title: "Korea, Democratic People'S Republic of", value: 'KP' },
              { title: 'Korea, Republic of', value: 'KR' },
              { title: 'Kuwait', value: 'KW' },
              { title: 'Kyrgyzstan', value: 'KG' },
              { title: "Lao People'S Democratic Republic", value: 'LA' },
              { title: 'Latvia', value: 'LV' },
              { title: 'Lebanon', value: 'LB' },
              { title: 'Lesotho', value: 'LS' },
              { title: 'Liberia', value: 'LR' },
              { title: 'Libyan Arab Jamahiriya', value: 'LY' },
              { title: 'Liechtenstein', value: 'LI' },
              { title: 'Lithuania', value: 'LT' },
              { title: 'Luxembourg', value: 'LU' },
              { title: 'Macao', value: 'MO' },
              { title: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
              { title: 'Madagascar', value: 'MG' },
              { title: 'Malawi', value: 'MW' },
              { title: 'Malaysia', value: 'MY' },
              { title: 'Maldives', value: 'MV' },
              { title: 'Mali', value: 'ML' },
              { title: 'Malta', value: 'MT' },
              { title: 'Marshall Islands', value: 'MH' },
              { title: 'Martinique', value: 'MQ' },
              { title: 'Mauritania', value: 'MR' },
              { title: 'Mauritius', value: 'MU' },
              { title: 'Mayotte', value: 'YT' },
              { title: 'Mexico', value: 'MX' },
              { title: 'Micronesia, Federated States of', value: 'FM' },
              { title: 'Moldova, Republic of', value: 'MD' },
              { title: 'Monaco', value: 'MC' },
              { title: 'Mongolia', value: 'MN' },
              { title: 'Montserrat', value: 'MS' },
              { title: 'Morocco', value: 'MA' },
              { title: 'Mozambique', value: 'MZ' },
              { title: 'Myanmar', value: 'MM' },
              { title: 'Namibia', value: 'NA' },
              { title: 'Nauru', value: 'NR' },
              { title: 'Nepal', value: 'NP' },
              { title: 'Netherlands', value: 'NL' },
              { title: 'Netherlands Antilles', value: 'AN' },
              { title: 'New Caledonia', value: 'NC' },
              { title: 'New Zealand', value: 'NZ' },
              { title: 'Nicaragua', value: 'NI' },
              { title: 'Niger', value: 'NE' },
              { title: 'Nigeria', value: 'NG' },
              { title: 'Niue', value: 'NU' },
              { title: 'Norfolk Island', value: 'NF' },
              { title: 'Northern Mariana Islands', value: 'MP' },
              { title: 'Norway', value: 'NO' },
              { title: 'Oman', value: 'OM' },
              { title: 'Pakistan', value: 'PK' },
              { title: 'Palau', value: 'PW' },
              { title: 'Palestinian Territory, Occupied', value: 'PS' },
              { title: 'Panama', value: 'PA' },
              { title: 'Papua New Guinea', value: 'PG' },
              { title: 'Paraguay', value: 'PY' },
              { title: 'Peru', value: 'PE' },
              { title: 'Philippines', value: 'PH' },
              { title: 'Pitcairn', value: 'PN' },
              { title: 'Poland', value: 'PL' },
              { title: 'Portugal', value: 'PT' },
              { title: 'Puerto Rico', value: 'PR' },
              { title: 'Qatar', value: 'QA' },
              { title: 'Reunion', value: 'RE' },
              { title: 'Romania', value: 'RO' },
              { title: 'Russian Federation', value: 'RU' },
              { title: 'RWANDA', value: 'RW' },
              { title: 'Saint Helena', value: 'SH' },
              { title: 'Saint Kitts and Nevis', value: 'KN' },
              { title: 'Saint Lucia', value: 'LC' },
              { title: 'Saint Pierre and Miquelon', value: 'PM' },
              { title: 'Saint Vincent and the Grenadines', value: 'VC' },
              { title: 'Samoa', value: 'WS' },
              { title: 'San Marino', value: 'SM' },
              { title: 'Sao Tome and Principe', value: 'ST' },
              { title: 'Saudi Arabia', value: 'SA' },
              { title: 'Senegal', value: 'SN' },
              { title: 'Serbia and Montenegro', value: 'CS' },
              { title: 'Seychelles', value: 'SC' },
              { title: 'Sierra Leone', value: 'SL' },
              { title: 'Singapore', value: 'SG' },
              { title: 'Slovakia', value: 'SK' },
              { title: 'Slovenia', value: 'SI' },
              { title: 'Solomon Islands', value: 'SB' },
              { title: 'Somalia', value: 'SO' },
              { title: 'South Africa', value: 'ZA' },
              { title: 'South Georgia and the South Sandwich Islands', value: 'GS' },
              { title: 'Spain', value: 'ES' },
              { title: 'Sri Lanka', value: 'LK' },
              { title: 'Sudan', value: 'SD' },
              { title: 'Suriname', value: 'SR' },
              { title: 'Svalbard and Jan Mayen', value: 'SJ' },
              { title: 'Swaziland', value: 'SZ' },
              { title: 'Sweden', value: 'SE' },
              { title: 'Switzerland', value: 'CH' },
              { title: 'Syrian Arab Republic', value: 'SY' },
              { title: 'Taiwan, Province of China', value: 'TW' },
              { title: 'Tajikistan', value: 'TJ' },
              { title: 'Tanzania, United Republic of', value: 'TZ' },
              { title: 'Thailand', value: 'TH' },
              { title: 'Timor-Leste', value: 'TL' },
              { title: 'Togo', value: 'TG' },
              { title: 'Tokelau', value: 'TK' },
              { title: 'Tonga', value: 'TO' },
              { title: 'Trinidad and Tobago', value: 'TT' },
              { title: 'Tunisia', value: 'TN' },
              { title: 'Turkey', value: 'TR' },
              { title: 'Turkmenistan', value: 'TM' },
              { title: 'Turks and Caicos Islands', value: 'TC' },
              { title: 'Tuvalu', value: 'TV' },
              { title: 'Uganda', value: 'UG' },
              { title: 'Ukraine', value: 'UA' },
              { title: 'United Arab Emirates', value: 'AE' },
              { title: 'United Kingdom', value: 'GB' },
              { title: 'United States', value: 'US' },
              { title: 'United States Minor Outlying Islands', value: 'UM' },
              { title: 'Uruguay', value: 'UY' },
              { title: 'Uzbekistan', value: 'UZ' },
              { title: 'Vanuatu', value: 'VU' },
              { title: 'Venezuela', value: 'VE' },
              { title: 'Viet Nam', value: 'VN' },
              { title: 'Virgin Islands, British', value: 'VG' },
              { title: 'Virgin Islands, U.S.', value: 'VI' },
              { title: 'Wallis and Futuna', value: 'WF' },
              { title: 'Western Sahara', value: 'EH' },
              { title: 'Yemen', value: 'YE' },
              { title: 'Zambia', value: 'ZM' },
              { title: 'Zimbabwe', value: 'ZW' },
            ],
          },
          {
            //Race question
            question: 'Race',
            required: true,
            id: 'race',
            name: 'race',
            initialValue: '',
            options: [
              {
                title: 'Native American',
                value: 'Native American',
              },
              {
                title: 'Asian/Pacific Islander',
                value: 'Asian',
              },
              {
                title: 'Black or African American',
                value: 'Black',
              },
              {
                title: 'Hispanic',
                value: 'Hispanic',
              },
              {
                title: 'White/Caucasian',
                value: 'White',
              },
              {
                title: 'Multiple/Other',
                value: 'Other',
              },
              {
                title: 'Prefer not to answer',
                value: 'notSay',
              },
            ],
          },
          {
            //Ethnicity question
            question: 'Ethnicity',
            required: true,
            id: 'ethnicity',
            name: 'ethnicity',
            initialValue: '',
            options: [
              {
                title: 'Hispanic or Latino',
                value: 'hispanic',
              },
              {
                title: 'Not Hispanic or Latino',
                value: 'notHispanic',
              },
            ],
          },
        ],
      },
    ],
    //Question Topic
    schoolQuestions: [
      {
        datalistQuestions: [
          {
            //University question
            question:
              'This event is for college students worldwide. Which university do you attend?',
            id: 'university',
            name: 'university',
            required: true,
            datalist: 'schools',
            initialValue: '',
          },
          {
            //Major question
            question: 'All majors are welcome at this event. What is your major?',
            id: 'major',
            name: 'major',
            required: true,
            datalist: 'majors',
            initialValue: '',
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Grade question
            question: 'Current level of study',
            required: true,
            id: 'studyLevel',
            name: 'studyLevel',
            initialValue: '',
            options: [
              {
                title: 'Less than Secondary / High School',
                value: 'middleSchool',
              },
              {
                title: 'Secondary / High School',
                value: 'highSchool',
              },
              {
                title: 'Undergraduate University (2 year - community college or similar)',
                value: 'sophomore',
              },
              {
                title: 'Undergraduate University (3+ year)',
                value: 'senior',
              },
              {
                title: 'Graduate University (Masters, Professional, Doctoral, etc)',
                value: 'grad',
              },
              {
                title: 'value School / Bootcamp',
                value: 'bootcamp',
              },
              {
                title: 'Other Vocational / Trade Program or Apprenticeship',
                value: 'vocational',
              },
              {
                title: 'Post Doctorate',
                value: 'phd',
              },
              {
                title: 'Other',
                value: 'other',
              },
              {
                title: "I'm not currently a student ",
                value: 'notStudent',
              },
              {
                title: 'Prefer not to answer',
                value: 'noAnswer',
              },
            ],
          },
        ],
      },
    ],
    //Question Topic
    hackathonExperienceQuestions: [
      {
        numberInputQuestions: [
          {
            //Hackathons attended question
            question: 'How many hackathons have you attended before?',
            required: true,
            id: 'hackathonExperience',
            name: 'hackathonExperience',
            min: '0',
            max: '100',
            pattern: '[0-9]+',
            initialValue: null,
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Experience question
            question: 'Relative software-building experience:',
            required: true,
            id: 'softwareExperience',
            name: 'softwareExperience',
            initialValue: '',
            options: [
              {
                title: 'Beginner',
                value: 'Beginner',
              },
              {
                title: 'Intermediate',
                value: 'Intermediate',
              },
              {
                title: 'Advanced',
                value: 'Advanced',
              },
              {
                title: 'Expert',
                value: 'Expert',
              },
            ],
          },
          {
            //Heard from question
            question: 'Where did you hear about HackPortal?',
            required: true,
            id: 'heardFrom',
            name: 'heardFrom',
            initialValue: '',
            options: [
              {
                title: 'Instagram',
                value: 'Instagram',
              },
              {
                title: 'Twitter',
                value: 'Twitter',
              },
              {
                title: 'Event Site',
                value: 'Event Site',
              },
              {
                title: 'Friend',
                value: 'Friend',
              },
              {
                title: 'Other',
                value: 'Other',
              },
            ],
          },
        ],
      },
    ],
    //Question Topic
    eventInfoQuestions: [
      {
        dropdownQuestions: [
          {
            //Shirt size question
            question: 'Shirt Size',
            required: true,
            id: 'size',
            name: 'size',
            initialValue: '',
            options: [
              {
                title: 'S',
                value: 's',
              },
              {
                title: 'M',
                value: 'm',
              },
              {
                title: 'L',
                value: 'l',
              },
              {
                title: 'XL',
                value: 'xl',
              },
            ],
          },
        ],
      },
      {
        checkboxQuestions: [
          {
            //Allergies question
            question: 'Allergies / Dietary Restrictions:',
            required: false,
            id: 'dietary',
            name: 'dietary',
            initialValue: [],
            options: [
              {
                title: 'Vegan',
                value: 'Vegan',
              },
              {
                title: 'Vegetarian',
                value: 'Vegetarian',
              },
              {
                title: 'Nuts',
                value: 'Nuts',
              },
              {
                title: 'Fish',
                value: 'Fish',
              },
              {
                title: 'Wheat',
                value: 'Wheat',
              },
              {
                title: 'Dairy',
                value: 'Dairy',
              },
              {
                title: 'Eggs',
                value: 'Eggs',
              },
            ],
          },
          {
            question: '  Code of Conduct',
            required: true,
            id: 'conduct',
            name: 'code of conduct',
            initialValue: [],
            options: [
              {
                title:
                  'I have read and agree to the MLH Code of Conduct."(https://static.mlh.io/docs/mlh-code-of-conduct.pdf)',
                value: 'conduct',
              },
            ],
          },
          {
            question: '  Terms and Conditions',
            required: true,
            id: 'condition',
            name: 'terms and conditions',
            initialValue: [],
            options: [
              {
                title:
                  'I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy (https://mlh.io/privacy). I further agree to the terms of both the MLH Contest Terms and Conditions (https://github.com/MLH/mlh-policies/blob/main/contest-terms.md)and the MLH Privacy Policy (https://mlh.io/privacy).',
                value: 'condition',
              },
            ],
          },
          {
            question: '\n',
            required: false,
            id: 'communication',
            name: 'communication',
            initialValue: [],
            options: [
              {
                title:
                  'I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or Organizer Newsletters and other communications from MLH.',
                value: 'condition',
              },
            ],
          },
        ],
      },
      {
        textAreaQuestions: [
          {
            //Accomodations question
            question: 'Anything else we can do to better accommodate you at our hackathon?',
            id: 'accomodations',
            name: 'accomodations',
            required: false,
            initialValue: '',
            placeholder: 'List any accessibility concerns here',
          },
        ],
      },
    ],
    //Question Topic
    sponsorInfoQuestions: [
      {
        textInputQuestions: [
          {
            //Github question
            question: 'Github:',
            id: 'github',
            name: 'github',
            required: false,
            initialValue: '',
          },
          {
            //LinkedIn question
            question: 'LinkedIn:',
            id: 'linkedin',
            name: 'linkedin',
            required: false,
            initialValue: '',
          },
          {
            //Website question
            question: 'Personal Website:',
            id: 'website',
            name: 'website',
            required: false,
            initialValue: '',
          },
        ],
      },
      {
        checkboxQuestions: [
          // {
          //   //Companies question
          //   question: 'Companies to send my resume to:',
          //   required: false,
          //   id: 'companies',
          //   name: 'companies',
          //   initialValue: [],
          //   options: [
          //     {
          //       title: 'State Farm',
          //       value: 'State Farm',
          //     },
          //     {
          //       title: 'American Airlines',
          //       value: 'American Airlines',
          //     },
          //     {
          //       title: 'Capital One',
          //       value: 'Capital One',
          //     },
          //     {
          //       title: 'Ebay',
          //       value: 'Ebay',
          //     },
          //     {
          //       title: 'Facebook',
          //       value: 'Facebook',
          //     },
          //   ],
          // },
        ],
      },
    ],
  },
};

//add any question data that your org would like to see on the admin stats page
export type statRecordTypes = {
  //name: Record<string || number, number>
  age: Record<number, number>;
  companies: Record<string, number>;
  dietary: Record<string, number>;
  ethnicity: Record<string, number>;
  race: Record<string, number>;
  size: Record<string, number>;
  softwareExperience: Record<string, number>;
  studyLevel: Record<string, number>;
  university: Record<string, number>;
  gender: Record<string, number>;
  hackathonExperience: Record<number, number>;
  heardFrom: Record<string, number>;
};

//add the title for each field that will be displayed as chart titles in admin stats page
export const fieldNames = {
  //name: title
  age: 'Age',
  ethnicity: 'Ethnicity',
  race: 'Race',
  size: 'Shirt Size',
  softwareExperience: 'Software Experience',
  studyLevel: 'Study Level',
  university: 'University',
  gender: 'Gender',
  hackathonExperience: 'Number of Hackathon attended',
  heardFrom: 'Heard of Hackathon from',
  scans: 'Swags', //not part of registration questions, used for scanner
  companies: 'Companies',
  dietary: 'Dietary',
};

//name fields that are checkbox questions belong here
export const arrayField = ['scans', 'companies', 'dietary'];
//any other fields belong here
export const singleField = [
  'age',
  'ethnicity',
  'race',
  'size',
  'softwareExperience',
  'studyLevel',
  'university',
  'gender',
  'hackathonExperience',
  'heardFrom',
];

//not to be edited ⬇︎ (unless there needs to be more question topics)
export interface HackPortalConfig {
  registrationFields: {
    generalQuestions: QuestionTypes[];
    schoolQuestions: QuestionTypes[];
    hackathonExperienceQuestions: QuestionTypes[];
    eventInfoQuestions: QuestionTypes[];
    sponsorInfoQuestions: QuestionTypes[];
  };
}

interface QuestionTypes {
  checkboxQuestions?: CheckboxQuestion[];
  dropdownQuestions?: DropdownQuestion[];
  textInputQuestions?: RegistrationQuestion[];
  numberInputQuestions?: NumberInputQuestion[];
  datalistQuestions?: datalistQuestion[];
  textAreaQuestions?: textAreaQuestion[];
}

interface RegistrationQuestion {
  question: string;
  id: string;
  name: string;
  required: boolean;
  initialValue: any; //value that will be first presented on the form
}

interface CheckboxQuestion extends RegistrationQuestion {
  options: Array<{
    title: string;
    value: string;
  }>;
}

interface DropdownQuestion extends RegistrationQuestion {
  options: Array<{
    title: string;
    value: string;
  }>;
}

interface NumberInputQuestion extends RegistrationQuestion {
  min: string;
  max: string;
  pattern: string;
}

interface datalistQuestion extends RegistrationQuestion {
  datalist: string;
}

interface textAreaQuestion extends RegistrationQuestion {
  placeholder: string;
}

//extracting initial values
var InitialValues: any = {};
const getInitialValues = () => {
  for (let obj of hackPortalConfig.registrationFields.generalQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.schoolQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.hackathonExperienceQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.eventInfoQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.sponsorInfoQuestions) {
    setInitialValues(obj);
  }
  return InitialValues;
};
const setInitialValues = (obj) => {
  if (obj.textInputQuestions)
    for (let inputObj of obj.textInputQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.numberInputQuestions)
    for (let inputObj of obj.numberInputQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.dropdownQuestions)
    for (let inputObj of obj.dropdownQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.checkboxQuestions)
    for (let inputObj of obj.checkboxQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.datalistQuestions)
    for (let inputObj of obj.datalistQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.textAreaQuestions)
    for (let inputObj of obj.textAreaQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
};

export const formInitialValues = getInitialValues();

//extracting statRecords for general stats
const getStatRecords = () => {
  let records: any = {};
  for (const field in fieldNames) {
    records[field] = {};
  }
  return records;
};
export const statRecords: statRecordTypes = getStatRecords();
