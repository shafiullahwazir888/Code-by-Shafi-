 const countryList = {
  "AED": "AE", // UAE Dirham - United Arab Emirates
  "AFN": "AF", // Afghan Afghani - Afghanistan
  "ALL": "AL", // Albanian Lek - Albania
  "AMD": "AM", // Armenian Dram - Armenia
  "ANG": "CW", // Netherlands Antillean Guilder - Curaçao (also used in Sint Maarten)
  "AOA": "AO", // Angolan Kwanza - Angola
  "ARS": "AR", // Argentine Peso - Argentina
  "AUD": "AU", // Australian Dollar - Australia
  "AWG": "AW", // Aruban Florin - Aruba
  "AZN": "AZ", // Azerbaijani Manat - Azerbaijan
  "BAM": "BA", // Bosnia and Herzegovina Convertible Mark - Bosnia and Herzegovina
  "BBD": "BB", // Barbados Dollar - Barbados
  "BDT": "BD", // Bangladeshi Taka - Bangladesh
  "BGN": "BG", // Bulgarian Lev - Bulgaria
  "BHD": "BH", // Bahraini Dinar - Bahrain
  "BIF": "BI", // Burundian Franc - Burundi
  "BMD": "BM", // Bermudian Dollar - Bermuda
  "BND": "BN", // Brunei Dollar - Brunei
  "BOB": "BO", // Bolivian Boliviano - Bolivia
  "BRL": "BR", // Brazilian Real - Brazil
  "BSD": "BS", // Bahamian Dollar - Bahamas
  "BTN": "BT", // Bhutanese Ngultrum - Bhutan
  "BWP": "BW", // Botswana Pula - Botswana
  "BYN": "BY", // Belarusian Ruble - Belarus
  "BZD": "BZ", // Belize Dollar - Belize
  "CAD": "CA", // Canadian Dollar - Canada
  "CDF": "CD", // Congolese Franc - Democratic Republic of the Congo
  "CHF": "CH", // Swiss Franc - Switzerland
  "CLP": "CL", // Chilean Peso - Chile
  "CNY": "CN", // Chinese Yuan - China
  "COP": "CO", // Colombian Peso - Colombia
  "CRC": "CR", // Costa Rican Colón - Costa Rica
  "CUP": "CU", // Cuban Peso - Cuba
  "CVE": "CV", // Cape Verdean Escudo - Cape Verde
  "CZK": "CZ", // Czech Koruna - Czechia
  "DJF": "DJ", // Djiboutian Franc - Djibouti
  "DKK": "DK", // Danish Krone - Denmark
  "DOP": "DO", // Dominican Peso - Dominican Republic
  "DZD": "DZ", // Algerian Dinar - Algeria
  "EGP": "EG", // Egyptian Pound - Egypt
  "ERN": "ER", // Eritrean Nakfa - Eritrea
  "ETB": "ET", // Ethiopian Birr - Ethiopia
  "EUR": "EU", // Euro - European Union (using common EU flag)
  "FJD": "FJ", // Fijian Dollar - Fiji
  "FKP": "FK", // Falkland Islands Pound - Falkland Islands
  "FOK": "FO", // Faroese Króna - Faroe Islands
  "GBP": "GB", // British Pound Sterling - United Kingdom
  "GEL": "GE", // Georgian Lari - Georgia
  "GGP": "GG", // Guernsey Pound - Guernsey
  "GHS": "GH", // Ghanaian Cedi - Ghana
  "GIP": "GI", // Gibraltar Pound - Gibraltar
  "GMD": "GM", // Gambian Dalasi - Gambia
  "GNF": "GN", // Guinean Franc - Guinea
  "GTQ": "GT", // Guatemalan Quetzal - Guatemala
  "GYD": "GY", // Guyanese Dollar - Guyana
  "HKD": "HK", // Hong Kong Dollar - Hong Kong
  "HNL": "HN", // Honduran Lempira - Honduras
  "HRK": "HR", // Croatian Kuna - Croatia (being phased out for EUR)
  "HTG": "HT", // Haitian Gourde - Haiti
  "HUF": "HU", // Hungarian Forint - Hungary
  "IDR": "ID", // Indonesian Rupiah - Indonesia
  "ILS": "IL", // Israeli New Shekel - Israel
  "IMP": "IM", // Isle of Man Pound - Isle of Man
  "INR": "IN", // Indian Rupee - India
  "IQD": "IQ", // Iraqi Dinar - Iraq
  "IRR": "IR", // Iranian Rial - Iran
  "ISK": "IS", // Icelandic Króna - Iceland
  "JEP": "JE", // Jersey Pound - Jersey
  "JMD": "JM", // Jamaican Dollar - Jamaica
  "JOD": "JO", // Jordanian Dinar - Jordan
  "JPY": "JP", // Japanese Yen - Japan
  "KES": "KE", // Kenyan Shilling - Kenya
  "KGS": "KG", // Kyrgyzstani Som - Kyrgyzstan
  "KHR": "KH", // Cambodian Riel - Cambodia
  "KID": "KI", // Kiribati Dollar - Kiribati
  "KMF": "KM", // Comorian Franc - Comoros
  "KRW": "KR", // South Korean Won - South Korea
  "KWD": "KW", // Kuwaiti Dinar - Kuwait
  "KYD": "KY", // Cayman Islands Dollar - Cayman Islands
  "KZT": "KZ", // Kazakhstani Tenge - Kazakhstan
  "LAK": "LA", // Lao Kip - Laos
  "LBP": "LB", // Lebanese Pound - Lebanon
  "LKR": "LK", // Sri Lankan Rupee - Sri Lanka
  "LRD": "LR", // Liberian Dollar - Liberia
  "LSL": "LS", // Lesotho Loti - Lesotho
  "LYD": "LY", // Libyan Dinar - Libya
  "MAD": "MA", // Moroccan Dirham - Morocco
  "MDL": "MD", // Moldovan Leu - Moldova
  "MGA": "MG", // Malagasy Ariary - Madagascar
  "MKD": "MK", // Macedonian Denar - North Macedonia
  "MMK": "MM", // Myanmar Kyat - Myanmar
  "MNT": "MN", // Mongolian Tögrög - Mongolia
  "MOP": "MO", // Macanese Pataca - Macau
  "MRU": "MR", // Mauritanian Ouguiya - Mauritania
  "MUR": "MU", // Mauritian Rupee - Mauritius
  "MVR": "MV", // Maldivian Rufiyaa - Maldives
  "MWK": "MW", // Malawian Kwacha - Malawi
  "MXN": "MX", // Mexican Peso - Mexico
  "MYR": "MY", // Malaysian Ringgit - Malaysia
  "MZN": "MZ", // Mozambican Metical - Mozambique
  "NAD": "NA", // Namibian Dollar - Namibia
  "NGN": "NG", // Nigerian Naira - Nigeria
  "NIO": "NI", // Nicaraguan Córdoba - Nicaragua
  "NOK": "NO", // Norwegian Krone - Norway
  "NPR": "NP", // Nepalese Rupee - Nepal
  "NZD": "NZ", // New Zealand Dollar - New Zealand
  "OMR": "OM", // Omani Rial - Oman
  "PAB": "PA", // Panamanian Balboa - Panama
  "PEN": "PE", // Peruvian Sol - Peru
  "PGK": "PG", // Papua New Guinean Kina - Papua New Guinea
  "PHP": "PH", // Philippine Peso - Philippines
  "PKR": "PK", // Pakistani Rupee - Pakistan
  "PLN": "PL", // Polish Złoty - Poland
  "PYG": "PY", // Paraguayan Guaraní - Paraguay
  "QAR": "QA", // Qatari Riyal - Qatar
  "RON": "RO", // Romanian Leu - Romania
  "RSD": "RS", // Serbian Dinar - Serbia
  "RUB": "RU", // Russian Ruble - Russia
  "RWF": "RW", // Rwandan Franc - Rwanda
  "SAR": "SA", // Saudi Riyal - Saudi Arabia
  "SBD": "SB", // Solomon Islands Dollar - Solomon Islands
  "SCR": "SC", // Seychellois Rupee - Seychelles
  "SDG": "SD", // Sudanese Pound - Sudan
  "SEK": "SE", // Swedish Krona - Sweden
  "SGD": "SG", // Singapore Dollar - Singapore
  "SHP": "SH", // Saint Helena Pound - Saint Helena
  "SLE": "SL", // Sierra Leonean Leone - Sierra Leone
  "SOS": "SO", // Somali Shilling - Somalia
  "SRD": "SR", // Surinamese Dollar - Suriname
  "SSP": "SS", // South Sudanese Pound - South Sudan
  "STN": "ST", // São Tomé and Príncipe Dobra - São Tomé and Príncipe
  "SYP": "SY", // Syrian Pound - Syria
  "SZL": "SZ", // Eswatini Lilangeni - Eswatini
  "THB": "TH", // Thai Baht - Thailand
  "TJS": "TJ", // Tajikistani Somoni - Tajikistan
  "TMT": "TM", // Turkmenistani Manat - Turkmenistan
  "TND": "TN", // Tunisian Dinar - Tunisia
  "TOP": "TO", // Tongan Paʻanga - Tonga
  "TRY": "TR", // Turkish Lira - Turkey
  "TTD": "TT", // Trinidad and Tobago Dollar - Trinidad and Tobago
  "TVD": "TV", // Tuvaluan Dollar - Tuvalu
  "TWD": "TW", // New Taiwan Dollar - Taiwan
  "TZS": "TZ", // Tanzanian Shilling - Tanzania
  "UAH": "UA", // Ukrainian Hryvnia - Ukraine
  "UGX": "UG", // Ugandan Shilling - Uganda
  "USD": "US", // US Dollar - United States
  "UYU": "UY", // Uruguayan Peso - Uruguay
  "UZS": "UZ", // Uzbekistani Soʻm - Uzbekistan
  "VES": "VE", // Venezuelan Bolívar Soberano - Venezuela
  "VND": "VN", // Vietnamese Đồng - Vietnam
  "VUV": "VU", // Vanuatu Vatu - Vanuatu
  "WST": "WS", // Samoan Tālā - Samoa
  "XAF": "CM", // Central African CFA Franc - Cameroon (common representative)
  "XAG": "ZZ", // Silver (no single country) - use fallback
  "XAU": "ZZ", // Gold (no single country) - use fallback
  "XCD": "AG", // East Caribbean Dollar - Antigua and Barbuda (common representative)
  "XCG": "CW", // Caribbean Guilder - Curaçao
  "XDR": "ZZ", // Special Drawing Rights (IMF) - no country
  "XOF": "SN", // West African CFA Franc - Senegal (common representative)
  "XPF": "PF", // CFP Franc - French Polynesia
  "YER": "YE", // Yemeni Rial - Yemen
  "ZAR": "ZA", // South African Rand - South Africa
  "ZMW": "ZM", // Zambian Kwacha - Zambia
  "ZWB": "ZW", // Zimbabwean Bonds - Zimbabwe
  "ZWL": "ZW"  // Zimbabwean Dollar - Zimbabwe
};