import type { LocalizationResource } from "@clerk/types";

export const hiIN: LocalizationResource = {
  locale: "hi-IN",
  __experimental_commerce: {
    billedAnnually: "वार्षिक रूप से बिल किया गया",
    free: "मुफ़्त",
    getStarted: "शुरू करें",
    manageMembership: "सदस्यता प्रबंधित करें",
    month: "महीना",
    switchPlan: "इस प्लान पर स्विच करें",
  },
  backButton: "वापस",
  badge__currentPlan: "वर्तमान प्लान",
  badge__default: "डिफ़ॉल्ट",
  badge__expired: "समाप्त हो गया",
  badge__otherImpersonatorDevice: "अन्य प्रतिरूपक डिवाइस",
  badge__primary: "प्राथमिक",
  badge__requiresAction: "कार्रवाई की आवश्यकता है",
  badge__thisDevice: "यह डिवाइस",
  badge__unverified: "असत्यापित",
  badge__userDevice: "उपयोगकर्ता डिवाइस",
  badge__you: "आप",
  createOrganization: {
    formButtonSubmit: "संगठन बनाएँ",
    invitePage: {
      formButtonReset: "छोड़ें",
    },
    title: "संगठन बनाएँ",
  },
  dates: {
    lastDay: "कल {{ date | timeString('hi-IN') }} बजे",
    next6Days:
      "{{ date | weekday('hi-IN','long') }} को {{ date | timeString('hi-IN') }} बजे",
    nextDay: "कल {{ date | timeString('hi-IN') }} बजे",
    numeric: "{{ date | numeric('hi-IN') }}",
    previous6Days:
      "पिछले {{ date | weekday('hi-IN','long') }} को {{ date | timeString('hi-IN') }} बजे",
    sameDay: "आज {{ date | timeString('hi-IN') }} बजे",
  },
  dividerText: "या",
  footerActionLink__useAnotherMethod: "दूसरी विधि का उपयोग करें",
  footerPageLink__help: "सहायता",
  footerPageLink__privacy: "गोपनीयता",
  footerPageLink__terms: "शर्तें",
  formButtonPrimary: "जारी रखें",
  formButtonPrimary__verify: "सत्यापित करें",
  formFieldAction__forgotPassword: "पासवर्ड भूल गए?",
  formFieldError__matchingPasswords: "पासवर्ड मिलते हैं।",
  formFieldError__notMatchingPasswords: "पासवर्ड मेल नहीं खाते।",
  formFieldError__verificationLinkExpired:
    "सत्यापन लिंक समाप्त हो गया। कृपया नया लिंक अनुरोध करें।",
  formFieldHintText__optional: "वैकल्पिक",
  formFieldHintText__slug:
    "स्लग एक मानव पठनीय ID है जो अद्वितीय होनी चाहिए। इसका अक्सर URL में उपयोग किया जाता है।",
  formFieldInputPlaceholder__backupCode: "बैकअप कोड दर्ज करें",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "खाता हटाएँ",
  formFieldInputPlaceholder__emailAddress: "अपना ईमेल पता दर्ज करें",
  formFieldInputPlaceholder__emailAddress_username:
    "ईमेल या उपयोगकर्ता नाम दर्ज करें",
  formFieldInputPlaceholder__emailAddresses:
    "example@email.com, example2@email.com",
  formFieldInputPlaceholder__firstName: "पहला नाम",
  formFieldInputPlaceholder__lastName: "अंतिम नाम",
  formFieldInputPlaceholder__organizationDomain: "example.com",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "you@example.com",
  formFieldInputPlaceholder__organizationName: "संगठन का नाम",
  formFieldInputPlaceholder__organizationSlug: "my-org",
  formFieldInputPlaceholder__password: "अपना पासवर्ड दर्ज करें",
  formFieldInputPlaceholder__phoneNumber: "अपना फोन नंबर दर्ज करें",
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__automaticInvitations:
    "इस डोमेन के लिए स्वचालित आमंत्रण सक्षम करें",
  formFieldLabel__backupCode: "बैकअप कोड",
  formFieldLabel__confirmDeletion: "पुष्टिकरण",
  formFieldLabel__confirmPassword: "पासवर्ड की पुष्टि करें",
  formFieldLabel__currentPassword: "वर्तमान पासवर्ड",
  formFieldLabel__emailAddress: "ईमेल पता",
  formFieldLabel__emailAddress_username: "ईमेल पता या उपयोगकर्ता नाम",
  formFieldLabel__emailAddresses: "ईमेल पते",
  formFieldLabel__firstName: "पहला नाम",
  formFieldLabel__lastName: "अंतिम नाम",
  formFieldLabel__newPassword: "नया पासवर्ड",
  formFieldLabel__organizationDomain: "डोमेन",
  formFieldLabel__organizationDomainDeletePending:
    "लंबित आमंत्रण और सुझावों को हटाएं",
  formFieldLabel__organizationDomainEmailAddress: "सत्यापन ईमेल पता",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "इस डोमेन के तहत एक ईमेल पता दर्ज करें ताकि कोड प्राप्त करके इस डोमेन को सत्यापित कर सकें।",
  formFieldLabel__organizationName: "नाम",
  formFieldLabel__organizationSlug: "स्लग",
  formFieldLabel__passkeyName: "पासकी का नाम",
  formFieldLabel__password: "पासवर्ड",
  formFieldLabel__phoneNumber: "फोन नंबर",
  formFieldLabel__role: "भूमिका",
  formFieldLabel__signOutOfOtherSessions: "अन्य सभी डिवाइसों से साइन आउट करें",
  formFieldLabel__username: "उपयोगकर्ता नाम",
  impersonationFab: {
    action__signOut: "साइन आउट",
    title: "{{identifier}} के रूप में साइन इन",
  },
  maintenanceMode:
    "हम वर्तमान में रखरखाव कर रहे हैं, लेकिन चिंता न करें, इसमें कुछ मिनटों से अधिक समय नहीं लगेगा।",
  membershipRole__admin: "व्यवस्थापक",
  membershipRole__basicMember: "सदस्य",
  membershipRole__guestMember: "अतिथि",
  organizationList: {
    action__createOrganization: "संगठन बनाएँ",
    action__invitationAccept: "शामिल हों",
    action__suggestionsAccept: "शामिल होने का अनुरोध करें",
    createOrganization: "संगठन बनाएँ",
    invitationAcceptedLabel: "शामिल हो गए",
    subtitle: "{{applicationName}} पर जारी रखने के लिए",
    suggestionsAcceptedLabel: "अनुमोदन का इंतज़ार",
    title: "एक खाता चुनें",
    titleWithoutPersonal: "एक संगठन चुनें",
  },
  organizationProfile: {
    badge__automaticInvitation: "स्वचालित आमंत्रण",
    badge__automaticSuggestion: "स्वचालित सुझाव",
    badge__manualInvitation: "कोई स्वचालित नामांकन नहीं",
    badge__unverified: "असत्यापित",
    createDomainPage: {
      subtitle:
        "सत्यापित करने के लिए डोमेन जोड़ें। इस डोमेन के ईमेल पते वाले उपयोगकर्ता स्वचालित रूप से संगठन में शामिल हो सकते हैं या शामिल होने का अनुरोध कर सकते हैं।",
      title: "डोमेन जोड़ें",
    },
    invitePage: {
      detailsTitle__inviteFailed:
        "आमंत्रण नहीं भेजे जा सके। निम्नलिखित ईमेल पतों के लिए पहले से ही लंबित आमंत्रण हैं: {{email_addresses}}।",
      formButtonPrimary__continue: "आमंत्रण भेजें",
      selectDropdown__role: "भूमिका चुनें",
      subtitle:
        "एक या अधिक ईमेल पते दर्ज करें या पेस्ट करें, स्थान या अल्पविराम से अलग करें।",
      successMessage: "आमंत्रण सफलतापूर्वक भेजे गए",
      title: "नए सदस्यों को आमंत्रित करें",
    },
    membersPage: {
      action__invite: "आमंत्रित करें",
      action__search: "खोजें",
      activeMembersTab: {
        menuAction__remove: "सदस्य हटाएँ",
        tableHeader__actions: "कार्रवाइयां",
        tableHeader__joined: "शामिल हुए",
        tableHeader__role: "भूमिका",
        tableHeader__user: "उपयोगकर्ता",
      },
      detailsTitle__emptyRow: "प्रदर्शित करने के लिए कोई सदस्य नहीं",
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            "अपने संगठन के साथ एक ईमेल डोमेन को जोड़कर उपयोगकर्ताओं को आमंत्रित करें। जो कोई भी मिलते ईमेल डोमेन के साथ साइन अप करता है, वह किसी भी समय संगठन में शामिल हो सकता है।",
          headerTitle: "स्वचालित आमंत्रण",
          primaryButton: "सत्यापित डोमेन प्रबंधित करें",
        },
        table__emptyRow: "प्रदर्शित करने के लिए कोई आमंत्रण नहीं",
      },
      invitedMembersTab: {
        menuAction__revoke: "आमंत्रण रद्द करें",
        tableHeader__invited: "आमंत्रित",
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            "जो उपयोगकर्ता मिलते ईमेल डोमेन के साथ साइन अप करते हैं, वे आपके संगठन में शामिल होने का अनुरोध करने के लिए एक सुझाव देख सकेंगे।",
          headerTitle: "स्वचालित सुझाव",
          primaryButton: "सत्यापित डोमेन प्रबंधित करें",
        },
        menuAction__approve: "स्वीकृत करें",
        menuAction__reject: "अस्वीकार करें",
        tableHeader__requested: "पहुंच का अनुरोध किया",
        table__emptyRow: "प्रदर्शित करने के लिए कोई अनुरोध नहीं",
      },
      start: {
        headerTitle__invitations: "आमंत्रण",
        headerTitle__members: "सदस्य",
        headerTitle__requests: "अनुरोध",
      },
    },
    navbar: {
      description: "अपना संगठन प्रबंधित करें।",
      general: "सामान्य",
      members: "सदस्य",
      title: "संगठन",
      billing: "बिलिंग",
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription:
            'जारी रखने के लिए नीचे "{{organizationName}}" टाइप करें।',
          messageLine1: "क्या आप वाकई इस संगठन को हटाना चाहते हैं?",
          messageLine2: "यह कार्रवाई स्थायी और अपरिवर्तनीय है।",
          successMessage: "आपने संगठन हटा दिया है।",
          title: "संगठन हटाएँ",
        },
        leaveOrganization: {
          actionDescription:
            'जारी रखने के लिए नीचे "{{organizationName}}" टाइप करें।',
          messageLine1:
            "क्या आप वाकई इस संगठन को छोड़ना चाहते हैं? आप इस संगठन और इसके अनुप्रयोगों तक पहुंच खो देंगे।",
          messageLine2: "यह कार्रवाई स्थायी और अपरिवर्तनीय है।",
          successMessage: "आपने संगठन छोड़ दिया है।",
          title: "संगठन छोड़ें",
        },
        title: "खतरा",
      },
      domainSection: {
        menuAction__manage: "प्रबंधित करें",
        menuAction__remove: "हटाएँ",
        menuAction__verify: "सत्यापित करें",
        primaryButton: "डोमेन जोड़ें",
        subtitle:
          "उपयोगकर्ताओं को सत्यापित ईमेल डोमेन के आधार पर स्वचालित रूप से संगठन में शामिल होने या शामिल होने का अनुरोध करने की अनुमति दें।",
        title: "सत्यापित डोमेन",
      },
      successMessage: "संगठन अपडेट किया गया है।",
      title: "प्रोफाइल अपडेट करें",
    },
    removeDomainPage: {
      messageLine1: "ईमेल डोमेन {{domain}} हटा दिया जाएगा।",
      messageLine2:
        "उपयोगकर्ता इसके बाद स्वचालित रूप से संगठन में शामिल नहीं हो सकेंगे।",
      successMessage: "{{domain}} हटा दिया गया है।",
      title: "डोमेन हटाएँ",
    },
    start: {
      headerTitle__general: "सामान्य",
      headerTitle__members: "सदस्य",
      profileSection: {
        primaryButton: "प्रोफाइल अपडेट करें",
        title: "संगठन प्रोफाइल",
        uploadAction__title: "लोगो",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel:
          "इस डोमेन को हटाने से आमंत्रित उपयोगकर्ता प्रभावित होंगे।",
        removeDomainActionLabel__remove: "डोमेन हटाएँ",
        removeDomainSubtitle: "इस डोमेन को अपने सत्यापित डोमेन से हटाएं",
        removeDomainTitle: "डोमेन हटाएँ",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "उपयोगकर्ताओं को साइन-अप करने पर स्वचालित रूप से संगठन में शामिल होने के लिए आमंत्रित किया जाता है और वे किसी भी समय शामिल हो सकते हैं।",
        automaticInvitationOption__label: "स्वचालित आमंत्रण",
        automaticSuggestionOption__description:
          "उपयोगकर्ताओं को शामिल होने का अनुरोध करने के लिए एक सुझाव मिलता है, लेकिन संगठन में शामिल होने से पहले उन्हें व्यवस्थापक द्वारा अनुमोदित किया जाना चाहिए।",
        automaticSuggestionOption__label: "स्वचालित सुझाव",
        calloutInfoLabel:
          "नामांकन मोड बदलने से केवल नए उपयोगकर्ता प्रभावित होंगे।",
        calloutInvitationCountLabel:
          "उपयोगकर्ताओं को भेजे गए लंबित आमंत्रण: {{count}}",
        calloutSuggestionCountLabel:
          "उपयोगकर्ताओं को भेजे गए लंबित सुझाव: {{count}}",
        manualInvitationOption__description:
          "उपयोगकर्ताओं को केवल मैन्युअल रूप से संगठन में आमंत्रित किया जा सकता है।",
        manualInvitationOption__label: "कोई स्वचालित नामांकन नहीं",
        subtitle:
          "चुनें कि इस डोमेन के उपयोगकर्ता कैसे संगठन में शामिल हो सकते हैं।",
      },
      start: {
        headerTitle__danger: "खतरा",
        headerTitle__enrollment: "नामांकन विकल्प",
      },
      subtitle:
        "डोमेन {{domain}} अब सत्यापित है। नामांकन मोड का चयन करके जारी रखें।",
      title: "{{domain}} अपडेट करें",
    },
    verifyDomainPage: {
      formSubtitle: "अपने ईमेल पते पर भेजा गया सत्यापन कोड दर्ज करें",
      formTitle: "सत्यापन कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle:
        "डोमेन {{domainName}} को ईमेल के माध्यम से सत्यापित करने की आवश्यकता है।",
      subtitleVerificationCodeScreen:
        "{{emailAddress}} पर एक सत्यापन कोड भेजा गया था। जारी रखने के लिए कोड दर्ज करें।",
      title: "डोमेन सत्यापित करें",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "संगठन बनाएँ",
    action__invitationAccept: "शामिल हों",
    action__manageOrganization: "प्रबंधित करें",
    action__suggestionsAccept: "शामिल होने का अनुरोध करें",
    notSelected: "कोई संगठन चयनित नहीं",
    personalWorkspace: "व्यक्तिगत खाता",
    suggestionsAcceptedLabel: "अनुमोदन का इंतज़ार",
  },
  paginationButton__next: "अगला",
  paginationButton__previous: "पिछला",
  paginationRowText__displaying: "प्रदर्शित",
  paginationRowText__of: "का",
  reverification: {
    alternativeMethods: {
      actionLink: "सहायता प्राप्त करें",
      actionText: "इनमें से कोई भी नहीं है?",
      blockButton__backupCode: "बैकअप कोड का उपयोग करें",
      blockButton__emailCode: "{{identifier}} पर ईमेल कोड",
      blockButton__passkey: "अपनी पासकी का उपयोग करें",
      blockButton__password: "अपने पासवर्ड के साथ जारी रखें",
      blockButton__phoneCode: "{{identifier}} पर SMS कोड भेजें",
      blockButton__totp: "अपने प्रमाणकर्ता ऐप का उपयोग करें",
      getHelp: {
        blockButton__emailSupport: "ईमेल सहायता",
        content:
          "यदि आपको अपने खाते को सत्यापित करने में समस्या हो रही है, तो हमें ईमेल करें और हम आपके साथ जितनी जल्दी हो सके पहुंच बहाल करने के लिए काम करेंगे।",
        title: "सहायता प्राप्त करें",
      },
      subtitle:
        "समस्याओं का सामना कर रहे हैं? आप सत्यापन के लिए इनमें से किसी भी विधि का उपयोग कर सकते हैं।",
      title: "अन्य विधि का उपयोग करें",
    },
    backupCodeMfa: {
      subtitle: "दो-चरणीय प्रमाणीकरण सेट करते समय प्राप्त बैकअप कोड दर्ज करें",
      title: "बैकअप कोड दर्ज करें",
    },
    emailCode: {
      formTitle: "सत्यापन कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle: "{{applicationName}} पर जारी रखने के लिए",
      title: "अपना ईमेल जांचें",
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          "जारी रखने के लिए, सत्यापन लिंक को उस डिवाइस और ब्राउज़र पर खोलें जिससे आपने साइन-इन शुरू किया था",
        title: "यह सत्यापन लिंक इस डिवाइस के लिए अमान्य है",
      },
      expired: {
        subtitle: "जारी रखने के लिए मूल टैब पर वापस जाएं।",
        title: "यह सत्यापन लिंक समाप्त हो गया है",
      },
      failed: {
        subtitle: "जारी रखने के लिए मूल टैब पर वापस जाएं।",
        title: "यह सत्यापन लिंक अमान्य है",
      },
      formSubtitle: "अपने ईमेल पर भेजे गए सत्यापन लिंक का उपयोग करें",
      formTitle: "सत्यापन लिंक",
      loading: {
        subtitle: "आप जल्द ही रीडायरेक्ट किए जाएंगे",
        title: "साइन इन हो रहा है...",
      },
      resendButton: "लिंक नहीं मिला? पुनः भेजें",
      subtitle: "{{applicationName}} पर जारी रखने के लिए",
      title: "अपना ईमेल जांचें",
      unusedTab: {
        title: "आप इस टैब को बंद कर सकते हैं",
      },
      verified: {
        subtitle: "आप जल्द ही रीडायरेक्ट किए जाएंगे",
        title: "सफलतापूर्वक साइन इन किया गया",
      },
      verifiedSwitchTab: {
        subtitle: "जारी रखने के लिए मूल टैब पर वापस जाएं",
        subtitleNewTab: "जारी रखने के लिए नए खुले टैब पर वापस जाएं",
        titleNewTab: "अन्य टैब पर साइन इन किया गया",
      },
    },
    forgotPassword: {
      formTitle: "पासवर्ड रीसेट कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle: "अपना पासवर्ड रीसेट करने के लिए",
      subtitle_email: "पहले, अपने ईमेल पते पर भेजा गया कोड दर्ज करें",
      subtitle_phone: "पहले, अपने फोन पर भेजा गया कोड दर्ज करें",
      title: "पासवर्ड रीसेट करें",
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: "अपना पासवर्ड रीसेट करें",
      label__alternativeMethods: "या, किसी अन्य विधि से साइन इन करें",
      title: "पासवर्ड भूल गए?",
    },
    noAvailableMethods: {
      message: "साइन इन जारी नहीं रख सकते। कोई उपलब्ध प्रमाणीकरण कारक नहीं है।",
      subtitle: "एक त्रुटि हुई",
      title: "साइन इन नहीं कर सकते",
    },
    passkey: {
      subtitle:
        "अपनी पासकी का उपयोग करने से पुष्टि होती है कि यह आप ही हैं। आपका डिवाइस आपके फिंगरप्रिंट, चेहरे या स्क्रीन लॉक के लिए पूछ सकता है।",
      title: "अपनी पासकी का उपयोग करें",
    },
    password: {
      actionLink: "अन्य विधि का उपयोग करें",
      subtitle: "अपने खाते से जुड़ा पासवर्ड दर्ज करें",
      title: "अपना पासवर्ड दर्ज करें",
    },
    passwordPwned: {
      title: "पासवर्ड समझौता किया गया",
    },
    phoneCode: {
      formTitle: "सत्यापन कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle: "{{applicationName}} पर जारी रखने के लिए",
      title: "अपना फोन जांचें",
    },
    phoneCodeMfa: {
      formTitle: "सत्यापन कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle:
        "जारी रखने के लिए, कृपया अपने फोन पर भेजे गए सत्यापन कोड को दर्ज करें",
      title: "अपना फोन जांचें",
    },
    resetPassword: {
      formButtonPrimary: "पासवर्ड रीसेट करें",
      requiredMessage: "सुरक्षा कारणों से, आपका पासवर्ड रीसेट करना आवश्यक है।",
      successMessage:
        "आपका पासवर्ड सफलतापूर्वक बदल दिया गया है। आपको साइन इन किया जा रहा है, कृपया एक क्षण प्रतीक्षा करें।",
      title: "नया पासवर्ड सेट करें",
    },
    resetPasswordMfa: {
      detailsLabel:
        "हमें आपका पासवर्ड रीसेट करने से पहले आपकी पहचान को सत्यापित करने की आवश्यकता है।",
    },
    start: {
      actionLink: "साइन अप करें",
      actionLink__join_waitlist: "प्रतीक्षा सूची में शामिल हों",
      actionLink__use_email: "ईमेल का उपयोग करें",
      actionLink__use_email_username: "ईमेल या उपयोगकर्ता नाम का उपयोग करें",
      actionLink__use_passkey: "इसके बजाय पासकी का उपयोग करें",
      actionLink__use_phone: "फोन का उपयोग करें",
      actionLink__use_username: "उपयोगकर्ता नाम का उपयोग करें",
      actionText: "खाता नहीं है?",
      actionText__join_waitlist: "जल्दी पहुंच चाहते हैं?",
      subtitle: "वापस आने पर स्वागत है! जारी रखने के लिए कृपया साइन इन करें",
      subtitleCombined: undefined,
      title: "{{applicationName}} में साइन इन करें",
      titleCombined: "{{applicationName}} पर जारी रखें",
    },
    totpMfa: {
      formTitle: "सत्यापन कोड",
      subtitle:
        "जारी रखने के लिए, कृपया अपने प्रमाणकर्ता ऐप द्वारा उत्पन्न सत्यापन कोड दर्ज करें",
      title: "दो-चरणीय सत्यापन",
    },
  },
  signInEnterPasswordTitle: "अपना पासवर्ड दर्ज करें",
  signUp: {
    continue: {
      actionLink: "साइन इन करें",
      actionText: "पहले से ही खाता है?",
      subtitle: "जारी रखने के लिए कृपया शेष विवरण भरें।",
      title: "अनुपलब्ध फ़ील्ड भरें",
    },
    emailCode: {
      formSubtitle: "अपने ईमेल पते पर भेजा गया सत्यापन कोड दर्ज करें",
      formTitle: "सत्यापन कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle: "अपने ईमेल पर भेजा गया सत्यापन कोड दर्ज करें",
      title: "अपना ईमेल सत्यापित करें",
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          "जारी रखने के लिए, सत्यापन लिंक को उस डिवाइस और ब्राउज़र पर खोलें जिससे आपने साइन-अप शुरू किया था",
        title: "यह सत्यापन लिंक इस डिवाइस के लिए अमान्य है",
      },
      formSubtitle: "अपने ईमेल पते पर भेजे गए सत्यापन लिंक का उपयोग करें",
      formTitle: "सत्यापन लिंक",
      loading: {
        title: "साइन अप हो रहा है...",
      },
      resendButton: "लिंक नहीं मिला? पुनः भेजें",
      subtitle: "{{applicationName}} पर जारी रखने के लिए",
      title: "अपना ईमेल सत्यापित करें",
      verified: {
        title: "सफलतापूर्वक साइन अप किया गया",
      },
      verifiedSwitchTab: {
        subtitle: "जारी रखने के लिए नए खुले टैब पर वापस जाएं",
        subtitleNewTab: "जारी रखने के लिए पिछले टैब पर वापस जाएं",
        title: "ईमेल सफलतापूर्वक सत्यापित किया गया",
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy:
          'मैं {{ privacyPolicyLink || link("गोपनीयता नीति") }} से सहमत हूं',
        label__onlyTermsOfService:
          'मैं {{ termsOfServiceLink || link("सेवा की शर्तें") }} से सहमत हूं',
        label__termsOfServiceAndPrivacyPolicy:
          'मैं {{ termsOfServiceLink || link("सेवा की शर्तें") }} और {{ privacyPolicyLink || link("गोपनीयता नीति") }} से सहमत हूं',
      },
      continue: {
        subtitle: "जारी रखने के लिए कृपया शर्तों को पढ़ें और स्वीकार करें",
        title: "कानूनी सहमति",
      },
    },
    phoneCode: {
      formSubtitle: "अपने फोन नंबर पर भेजा गया सत्यापन कोड दर्ज करें",
      formTitle: "सत्यापन कोड",
      resendButton: "कोड नहीं मिला? पुनः भेजें",
      subtitle: "अपने फोन पर भेजा गया सत्यापन कोड दर्ज करें",
      title: "अपना फोन सत्यापित करें",
    },
    restrictedAccess: {
      actionLink: "साइन इन करें",
      actionText: "पहले से ही खाता है?",
      blockButton__emailSupport: "ईमेल सहायता",
      blockButton__joinWaitlist: "प्रतीक्षा सूची में शामिल हों",
      subtitle:
        "साइन अप वर्तमान में अक्षम हैं। यदि आपको लगता है कि आपको पहुंच होनी चाहिए, तो कृपया सहायता से संपर्क करें।",
      subtitleWaitlist:
        "साइन अप वर्तमान में अक्षम हैं। हमारे लॉन्च होने पर पहले जानने के लिए, प्रतीक्षा सूची में शामिल हों।",
      title: "पहुंच प्रतिबंधित",
    },
    start: {
      actionLink: "साइन इन करें",
      actionLink__use_email: "इसके बजाय ईमेल का उपयोग करें",
      actionLink__use_phone: "इसके बजाय फोन का उपयोग करें",
      actionText: "पहले से ही खाता है?",
      subtitle: "स्वागत! आरंभ करने के लिए कृपया विवरण भरें।",
      subtitleCombined: "स्वागत! आरंभ करने के लिए कृपया विवरण भरें।",
      title: "अपना खाता बनाएँ",
      titleCombined: "अपना खाता बनाएँ",
    },
  },
  socialButtonsBlockButton: "{{provider|titleize}} के साथ जारी रखें",
  socialButtonsBlockButtonManyInView: "{{provider|titleize}}",
  unstable__errors: {
    already_a_member_in_organization: "{{email}} पहले से ही संगठन का सदस्य है।",
    captcha_invalid:
      "सुरक्षा सत्यापन की विफलता के कारण साइन अप असफल रहा। कृपया फिर से प्रयास करने के लिए पेज को रिफ्रेश करें या अधिक सहायता के लिए सपोर्ट से संपर्क करें।",
    captcha_unavailable:
      "बॉट सत्यापन विफलता के कारण साइन अप असफल रहा। कृपया फिर से प्रयास करने के लिए पेज को रिफ्रेश करें या अधिक सहायता के लिए सपोर्ट से संपर्क करें।",
    form_code_incorrect: undefined,
    form_identifier_exists__email_address:
      "यह ईमेल पता पहले से लिया गया है। कृपया दूसरा आज़माएँ।",
    form_identifier_exists__phone_number:
      "यह फोन नंबर पहले से लिया गया है। कृपया दूसरा आज़माएँ।",
    form_identifier_exists__username:
      "यह उपयोगकर्ता नाम पहले से लिया गया है। कृपया दूसरा आज़माएँ।",
    form_identifier_not_found:
      "इस पहचानकर्ता के साथ कोई खाता नहीं मिला। कृपया जांचें और फिर से प्रयास करें।",
    form_param_format_invalid:
      "दर्ज किया गया मान अमान्य प्रारूप में है। कृपया इसे जांचें और सही करें।",
    form_param_format_invalid__email_address:
      "ईमेल पता एक वैध ईमेल पता होना चाहिए।",
    form_param_format_invalid__phone_number:
      "फोन नंबर एक वैध अंतरराष्ट्रीय प्रारूप में होना चाहिए।",
    form_param_max_length_exceeded__first_name:
      "पहला नाम 256 अक्षरों से अधिक नहीं होना चाहिए।",
    form_param_max_length_exceeded__last_name:
      "अंतिम नाम 256 अक्षरों से अधिक नहीं होना चाहिए।",
    form_param_max_length_exceeded__name:
      "नाम 256 अक्षरों से अधिक नहीं होना चाहिए।",
    form_param_nil: "यह फ़ील्ड आवश्यक है और खाली नहीं हो सकता।",
    form_param_value_invalid:
      "दर्ज किया गया मान अमान्य है। कृपया इसे सही करें।",
    form_password_incorrect:
      "आपके द्वारा दर्ज किया गया पासवर्ड गलत है। कृपया पुन: प्रयास करें।",
    form_password_length_too_short:
      "आपका पासवर्ड बहुत छोटा है। इसकी लंबाई कम से कम 8 अक्षर होनी चाहिए।",
    form_password_not_strong_enough: "आपका पासवर्ड पर्याप्त मजबूत नहीं है।",
    form_password_pwned:
      "यह पासवर्ड डेटा उल्लंघन का हिस्सा पाया गया है और इसका उपयोग नहीं किया जा सकता, कृपया इसके बजाय अन्य पासवर्ड आज़माएँ।",
    form_password_pwned__sign_in:
      "यह पासवर्ड डेटा उल्लंघन का हिस्सा पाया गया है और इसका उपयोग नहीं किया जा सकता, कृपया अपना पासवर्ड रीसेट करें।",
    form_password_size_in_bytes_exceeded:
      "आपके पासवर्ड ने अनुमत बाइट्स की अधिकतम संख्या से अधिक हो गई है, कृपया इसे छोटा करें या कुछ विशेष वर्णों को हटाएं।",
    form_password_validation_failed: "गलत पासवर्ड",
    form_username_invalid_character:
      "आपके उपयोगकर्ता नाम में अमान्य वर्ण हैं। कृपया केवल अक्षरों, संख्याओं और अंडरस्कोर का उपयोग करें।",
    form_username_invalid_length:
      "आपका उपयोगकर्ता नाम {{min_length}} और {{max_length}} अक्षरों के बीच होना चाहिए।",
    identification_deletion_failed: "आप अपनी अंतिम पहचान को हटा नहीं सकते।",
    not_allowed_access:
      "आपको इस पृष्ठ तक पहुंचने की अनुमति नहीं है। यदि आपको लगता है कि यह त्रुटि है, तो कृपया समर्थन से संपर्क करें।",
    organization_domain_blocked:
      "यह एक अवरुद्ध ईमेल प्रदाता डोमेन है। कृपया अन्य का उपयोग करें।",
    organization_domain_common:
      "यह एक सामान्य ईमेल प्रदाता डोमेन है। कृपया अन्य का उपयोग करें।",
    organization_domain_exists_for_enterprise_connection:
      "यह डोमेन पहले से ही आपके संगठन के SSO के लिए उपयोग किया जाता है",
    organization_membership_quota_exceeded:
      "आप अपने संगठन की सदस्यताओं की सीमा तक पहुंच गए हैं, जिसमें बकाया आमंत्रण भी शामिल हैं।",
    organization_minimum_permissions_needed:
      "कम से कम एक संगठन सदस्य के पास न्यूनतम आवश्यक अनुमतियां होनी चाहिए।",
    passkey_already_exists: "इस डिवाइस के साथ पहले से ही एक पासकी पंजीकृत है।",
    passkey_not_supported: "इस डिवाइस पर पासकी समर्थित नहीं हैं।",
    passkey_pa_not_supported:
      "पंजीकरण के लिए एक प्लेटफॉर्म प्रमाणकर्ता की आवश्यकता होती है लेकिन डिवाइस इसका समर्थन नहीं करता है।",
    passkey_registration_cancelled:
      "पासकी पंजीकरण रद्द कर दिया गया या समय समाप्त हो गया।",
    passkey_retrieval_cancelled:
      "पासकी सत्यापन रद्द कर दिया गया या समय समाप्त हो गया।",
    passwordComplexity: {
      maximumLength: "{{length}} से कम अक्षर",
      minimumLength: "{{length}} या अधिक अक्षर",
      requireLowercase: "एक लोअरकेस अक्षर",
      requireNumbers: "एक संख्या",
      requireSpecialCharacter: "एक विशेष वर्ण",
      requireUppercase: "एक अपरकेस अक्षर",
      sentencePrefix: "आपके पासवर्ड में होना चाहिए",
    },
    phone_number_exists:
      "यह फोन नंबर पहले से लिया गया है। कृपया दूसरा आज़माएँ।",
    web3_missing_identifier:
      "Web3 वॉलेट एक्सटेंशन नहीं मिल सका। जारी रखने के लिए कृपया एक इंस्टॉल करें।",
    zxcvbn: {
      couldBeStronger:
        "आपका पासवर्ड काम करता है, लेकिन मज़बूत हो सकता है। अधिक अक्षर जोड़ने का प्रयास करें।",
      goodPassword: "आपका पासवर्ड सभी आवश्यक आवश्यकताओं को पूरा करता है।",
      notEnough: "आपका पासवर्ड पर्याप्त मजबूत नहीं है।",
      suggestions: {
        allUppercase: "कुछ अक्षरों को बड़े करें, लेकिन सभी को नहीं।",
        anotherWord: "अधिक शब्द जोड़ें जो कम सामान्य हों।",
        associatedYears: "आपसे जुड़े वर्षों से बचें।",
        capitalization: "पहले अक्षर से अधिक को बड़ा करें।",
        dates: "आपसे जुड़े तारीखों और वर्षों से बचें।",
        l33t: "अनुमानित अक्षर प्रतिस्थापन से बचें जैसे 'a' के लिए '@'।",
        longerKeyboardPattern:
          "लंबे कीबोर्ड पैटर्न का उपयोग करें और टाइपिंग दिशा को कई बार बदलें।",
        noNeed:
          "आप प्रतीक, संख्या या अपरकेस अक्षरों का उपयोग किए बिना मजबूत पासवर्ड बना सकते हैं।",
        pwned:
          "यदि आप इस पासवर्ड का उपयोग कहीं और करते हैं, तो आपको इसे बदलना चाहिए।",
        recentYears: "हाल के वर्षों से बचें।",
        repeated: "दोहराए गए शब्दों और अक्षरों से बचें।",
        reverseWords: "सामान्य शब्दों के उल्टे वर्तनी से बचें।",
        sequences: "सामान्य वर्ण अनुक्रमों से बचें।",
        useWords: "कई शब्दों का उपयोग करें, लेकिन सामान्य वाक्यांशों से बचें।",
      },
      warnings: {
        common: "यह एक आमतौर पर उपयोग किया जाने वाला पासवर्ड है।",
        commonNames: "सामान्य नाम और उपनाम अनुमान लगाना आसान होते हैं।",
        dates: "तारीखों का अनुमान लगाना आसान होता है।",
        extendedRepeat:
          '"abcabcabc" जैसे दोहराए गए वर्ण पैटर्न का अनुमान लगाना आसान होता है।',
        keyPattern: "छोटे कीबोर्ड पैटर्न का अनुमान लगाना आसान होता है।",
        namesByThemselves: "अकेले नाम या उपनाम का अनुमान लगाना आसान होता है।",
        pwned: "आपका पासवर्ड इंटरनेट पर डेटा उल्लंघन से उजागर किया गया था।",
        recentYears: "हाल के वर्षों का अनुमान लगाना आसान होता है।",
        sequences:
          '"abc" जैसे सामान्य वर्ण अनुक्रमों का अनुमान लगाना आसान होता है।',
        similarToCommon:
          "यह एक आमतौर पर उपयोग किए जाने वाले पासवर्ड के समान है।",
        simpleRepeat:
          '"aaa" जैसे दोहराए गए अक्षरों का अनुमान लगाना आसान होता है।',
        straightRow:
          "आपके कीबोर्ड पर सीधी पंक्तियों की कुंजियों का अनुमान लगाना आसान होता है।",
        topHundred: "यह एक अक्सर उपयोग किया जाने वाला पासवर्ड है।",
        topTen: "यह एक बहुत अधिक उपयोग किया जाने वाला पासवर्ड है।",
        userInputs:
          "किसी भी व्यक्तिगत या पृष्ठ से संबंधित डेटा नहीं होना चाहिए।",
        wordByItself: "अकेले शब्दों का अनुमान लगाना आसान होता है।",
      },
    },
  },
  userButton: {
    action__addAccount: "खाता जोड़ें",
    action__manageAccount: "खाता प्रबंधित करें",
    action__signOut: "साइन आउट",
    action__signOutAll: "सभी खातों से साइन आउट करें",
  },
  userProfile: {
    __experimental_billingPage: {
      start: {
        headerTitle__invoices: "चालान",
        headerTitle__paymentSources: "भुगतान स्रोत",
        headerTitle__plans: "प्लान",
      },
      title: "बिलिंग और भुगतान",
      paymentSourcesSection: {
        title: "उपलब्ध विकल्प",
        add: "नया भुगतान स्रोत जोड़ें",
        addSubtitle: "अपने खाते में एक नया भुगतान स्रोत जोड़ें।",
        cancelButton: "रद्द करें",
        actionLabel__default: "डिफ़ॉल्ट बनाएँ",
        actionLabel__remove: "हटाएँ",
        formButtonPrimary__add: "भुगतान विधि जोड़ें",
        formButtonPrimary__pay: "{{amount}} का भुगतान करें",
        removeResource: {
          title: "भुगतान स्रोत हटाएँ",
          messageLine1: "{{identifier}} को इस खाते से हटा दिया जाएगा।",
          messageLine2:
            "आप अब इस भुगतान स्रोत का उपयोग नहीं कर पाएंगे और इस पर निर्भर कोई भी आवर्ती सदस्यता अब काम नहीं करेगी।",
          successMessage: "{{paymentSource}} को आपके खाते से हटा दिया गया है।",
        },
      },
    },
    backupCodePage: {
      actionLabel__copied: "कॉपी किया गया!",
      actionLabel__copy: "सभी कॉपी करें",
      actionLabel__download: ".txt डाउनलोड करें",
      actionLabel__print: "प्रिंट करें",
      infoText1: "इस खाते के लिए बैकअप कोड सक्षम किए जाएंगे।",
      infoText2:
        "बैकअप कोड को गोपनीय रखें और सुरक्षित रूप से संग्रहीत करें। यदि आपको संदेह है कि वे समझौता कर दिए गए हैं, तो आप बैकअप कोड फिर से जनरेट कर सकते हैं।",
      subtitle__codelist:
        "इन्हें सुरक्षित रूप से संग्रहीत करें और गोपनीय रखें।",
      successMessage:
        "बैकअप कोड अब सक्षम हैं। यदि आप अपने प्रमाणीकरण डिवाइस तक पहुँच खो देते हैं, तो आप अपने खाते में साइन इन करने के लिए इनमें से एक का उपयोग कर सकते हैं। प्रत्येक कोड का उपयोग केवल एक बार किया जा सकता है।",
      successSubtitle:
        "यदि आप अपने प्रमाणीकरण डिवाइस तक पहुँच खो देते हैं, तो आप अपने खाते में साइन इन करने के लिए इनमें से एक का उपयोग कर सकते हैं।",
      title: "बैकअप कोड सत्यापन जोड़ें",
      title__codelist: "बैकअप कोड",
    },
    connectedAccountPage: {
      formHint: "अपने खाते को कनेक्ट करने के लिए एक प्रदाता चुनें।",
      formHint__noAccounts: "कोई उपलब्ध बाहरी खाता प्रदाता नहीं हैं।",
      removeResource: {
        messageLine1: "{{identifier}} को इस खाते से हटा दिया जाएगा।",
        messageLine2:
          "आप अब इस कनेक्टेड खाते का उपयोग नहीं कर पाएंगे और कोई भी निर्भर सुविधाएँ अब काम नहीं करेंगी।",
        successMessage: "{{connectedAccount}} को आपके खाते से हटा दिया गया है।",
        title: "कनेक्टेड खाता हटाएँ",
      },
      socialButtonsBlockButton: "{{provider|titleize}}",
      successMessage: "प्रदाता को आपके खाते में जोड़ दिया गया है",
      title: "कनेक्टेड खाता जोड़ें",
    },
    deletePage: {
      actionDescription: 'जारी रखने के लिए नीचे "Delete account" टाइप करें।',
      confirm: "खाता हटाएँ",
      messageLine1: "क्या आप वाकई अपना खाता हटाना चाहते हैं?",
      messageLine2: "यह कार्रवाई स्थायी और अपरिवर्तनीय है।",
      title: "खाता हटाएँ",
    },
    emailAddressPage: {
      emailCode: {
        formHint: "इस ईमेल पते पर एक सत्यापन कोड वाला ईमेल भेजा जाएगा।",
        formSubtitle: "{{identifier}} पर भेजे गए सत्यापन कोड को दर्ज करें",
        formTitle: "सत्यापन कोड",
        resendButton: "कोड नहीं मिला? पुनः भेजें",
        successMessage:
          "ईमेल {{identifier}} को आपके खाते में जोड़ दिया गया है।",
      },
      emailLink: {
        formHint: "इस ईमेल पते पर एक सत्यापन लिंक वाला ईमेल भेजा जाएगा।",
        formSubtitle:
          "{{identifier}} पर भेजे गए ईमेल में सत्यापन लिंक पर क्लिक करें",
        formTitle: "सत्यापन लिंक",
        resendButton: "लिंक नहीं मिला? पुनः भेजें",
        successMessage:
          "ईमेल {{identifier}} को आपके खाते में जोड़ दिया गया है।",
      },
      enterpriseSSOLink: {
        formButton: "साइन-इन करने के लिए क्लिक करें",
        formSubtitle: "{{identifier}} के साथ साइन-इन पूरा करें",
      },
      formHint:
        "इस ईमेल पते को आपके खाते में जोड़ने से पहले इसे सत्यापित करना होगा।",
      removeResource: {
        messageLine1: "{{identifier}} को इस खाते से हटा दिया जाएगा।",
        messageLine2: "आप अब इस ईमेल पते का उपयोग करके साइन इन नहीं कर पाएंगे।",
        successMessage: "{{emailAddress}} को आपके खाते से हटा दिया गया है।",
        title: "ईमेल पता हटाएँ",
      },
      title: "ईमेल पता जोड़ें",
      verifyTitle: "ईमेल पता सत्यापित करें",
    },
    formButtonPrimary__add: "जोड़ें",
    formButtonPrimary__continue: "जारी रखें",
    formButtonPrimary__finish: "समाप्त करें",
    formButtonPrimary__remove: "हटाएँ",
    formButtonPrimary__save: "सहेजें",
    formButtonReset: "रद्द करें",
    mfaPage: {
      formHint: "जोड़ने के लिए एक विधि चुनें।",
      title: "दो-चरणीय सत्यापन जोड़ें",
    },
    mfaPhoneCodePage: {
      backButton: "मौजूदा नंबर का उपयोग करें",
      primaryButton__addPhoneNumber: "फोन नंबर जोड़ें",
      removeResource: {
        messageLine1:
          "{{identifier}} अब साइन इन करते समय सत्यापन कोड प्राप्त नहीं करेगा।",
        messageLine2:
          "आपका खाता उतना सुरक्षित नहीं हो सकता है। क्या आप वाकई जारी रखना चाहते हैं?",
        successMessage:
          "{{mfaPhoneCode}} के लिए SMS कोड दो-चरणीय सत्यापन हटा दिया गया है",
        title: "दो-चरणीय सत्यापन हटाएँ",
      },
      subtitle__availablePhoneNumbers:
        "SMS कोड दो-चरणीय सत्यापन के लिए एक मौजूदा फोन नंबर चुनें या एक नया जोड़ें।",
      subtitle__unavailablePhoneNumbers:
        "SMS कोड दो-चरणीय सत्यापन के लिए पंजीकरण करने के लिए कोई उपलब्ध फोन नंबर नहीं हैं, कृपया एक नया जोड़ें।",
      successMessage1:
        "साइन इन करते समय, आपको अतिरिक्त चरण के रूप में इस फोन नंबर पर भेजे गए सत्यापन कोड दर्ज करने की आवश्यकता होगी।",
      successMessage2:
        "इन बैकअप कोड को सहेजें और उन्हें कहीं सुरक्षित रखें। यदि आप अपने प्रमाणीकरण डिवाइस तक पहुंच खो देते हैं, तो आप साइन इन करने के लिए बैकअप कोड का उपयोग कर सकते हैं।",
      successTitle: "SMS कोड सत्यापन सक्षम किया गया",
      title: "SMS कोड सत्यापन जोड़ें",
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: "इसके बजाय QR कोड स्कैन करें",
        buttonUnableToScan__nonPrimary: "QR कोड स्कैन नहीं कर पा रहे हैं?",
        infoText__ableToScan:
          "अपने प्रमाणकर्ता ऐप में एक नई साइन-इन विधि सेटअप करें और अपने खाते से जोड़ने के लिए निम्नलिखित QR कोड को स्कैन करें।",
        infoText__unableToScan:
          "अपने प्रमाणकर्ता में एक नई साइन-इन विधि सेटअप करें और नीचे दिए गए कुंजी को दर्ज करें।",
        inputLabel__unableToScan1:
          "सुनिश्चित करें कि समय-आधारित या एक-बार पासवर्ड सक्षम है, फिर अपने खाते को लिंक करना पूरा करें।",
        inputLabel__unableToScan2:
          "वैकल्पिक रूप से, यदि आपका प्रमाणकर्ता TOTP URI का समर्थन करता है, तो आप पूर्ण URI को भी कॉपी कर सकते हैं।",
      },
      removeResource: {
        messageLine1:
          "साइन इन करते समय इस प्रमाणीकरण से सत्यापन कोड की अब आवश्यकता नहीं होगी।",
        messageLine2:
          "आपका खाता उतना सुरक्षित नहीं हो सकता है। क्या आप वाकई जारी रखना चाहते हैं?",
        successMessage:
          "प्रमाणकर्ता एप्लिकेशन के माध्यम से दो-चरणीय सत्यापन हटा दिया गया है।",
        title: "दो-चरणीय सत्यापन हटाएँ",
      },
      successMessage:
        "दो-चरणीय सत्यापन अब सक्षम है। साइन इन करते समय, आपको अतिरिक्त चरण के रूप में इस प्रमाणकर्ता से सत्यापन कोड दर्ज करने की आवश्यकता होगी।",
      title: "प्रमाणकर्ता एप्लिकेशन जोड़ें",
      verifySubtitle: "अपने प्रमाणकर्ता द्वारा उत्पन्न सत्यापन कोड दर्ज करें",
      verifyTitle: "सत्यापन कोड",
    },
    mobileButton__menu: "मेनू",
    navbar: {
      account: "प्रोफाइल",
      billing: "बिलिंग",
      description: "अपनी खाता जानकारी प्रबंधित करें।",
      security: "सुरक्षा",
      title: "खाता",
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: "{{name}} को इस खाते से हटा दिया जाएगा।",
        title: "पासकी हटाएँ",
      },
      subtitle__rename: "आप पासकी का नाम बदल सकते हैं ताकि इसे ढूंढना आसान हो।",
      title__rename: "पासकी का नाम बदलें",
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        "यह अनुशंसा की जाती है कि आप अन्य सभी डिवाइसों से साइन आउट करें जिन्होंने संभवतः आपके पुराने पासवर्ड का उपयोग किया हो।",
      readonly:
        "आपका पासवर्ड वर्तमान में संपादित नहीं किया जा सकता क्योंकि आप केवल एंटरप्राइज कनेक्शन के माध्यम से साइन इन कर सकते हैं।",
      successMessage__set: "आपका पासवर्ड सेट कर दिया गया है।",
      successMessage__signOutOfOtherSessions:
        "अन्य सभी डिवाइसों को साइन आउट कर दिया गया है।",
      successMessage__update: "आपका पासवर्ड अपडेट कर दिया गया है।",
      title__set: "पासवर्ड सेट करें",
      title__update: "पासवर्ड अपडेट करें",
    },
    phoneNumberPage: {
      infoText:
        "इस फोन नंबर पर एक सत्यापन कोड वाला टेक्स्ट मैसेज भेजा जाएगा। संदेश और डेटा दरें लागू हो सकती हैं।",
      removeResource: {
        messageLine1: "{{identifier}} को इस खाते से हटा दिया जाएगा।",
        messageLine2: "आप अब इस फोन नंबर का उपयोग करके साइन इन नहीं कर पाएंगे।",
        successMessage: "{{phoneNumber}} को आपके खाते से हटा दिया गया है।",
        title: "फोन नंबर हटाएँ",
      },
      successMessage: "{{identifier}} को आपके खाते में जोड़ दिया गया है।",
      title: "फोन नंबर जोड़ें",
      verifySubtitle: "{{identifier}} पर भेजे गए सत्यापन कोड को दर्ज करें",
      verifyTitle: "फोन नंबर सत्यापित करें",
    },
    profilePage: {
      fileDropAreaHint: "अनुशंसित आकार 1:1, 10MB तक।",
      imageFormDestructiveActionSubtitle: "हटाएँ",
      imageFormSubtitle: "अपलोड करें",
      imageFormTitle: "प्रोफाइल छवि",
      readonly:
        "आपकी प्रोफाइल जानकारी एंटरप्राइज कनेक्शन द्वारा प्रदान की गई है और संपादित नहीं की जा सकती है।",
      successMessage: "आपकी प्रोफाइल अपडेट कर दी गई है।",
      title: "प्रोफाइल अपडेट करें",
    },
    start: {
      activeDevicesSection: {
        destructiveAction: "डिवाइस से साइन आउट करें",
        title: "सक्रिय डिवाइस",
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: "पुनः कनेक्ट करें",
        actionLabel__reauthorize: "अभी अधिकृत करें",
        destructiveActionTitle: "हटाएँ",
        primaryButton: "खाता कनेक्ट करें",
        subtitle__disconnected: "यह खाता डिस्कनेक्ट कर दिया गया है।",
        subtitle__reauthorize:
          "आवश्यक स्कोप अपडेट किए गए हैं, और आप सीमित कार्यक्षमता का अनुभव कर सकते हैं। किसी भी समस्या से बचने के लिए कृपया इस एप्लिकेशन को फिर से अधिकृत करें",
        title: "कनेक्टेड खाते",
      },
      dangerSection: {
        deleteAccountButton: "खाता हटाएँ",
        title: "खाता हटाएँ",
      },
      emailAddressesSection: {
        destructiveAction: "ईमेल हटाएँ",
        detailsAction__nonPrimary: "प्राथमिक के रूप में सेट करें",
        detailsAction__primary: "सत्यापन पूरा करें",
        detailsAction__unverified: "सत्यापित करें",
        primaryButton: "ईमेल पता जोड़ें",
        title: "ईमेल पते",
      },
      enterpriseAccountsSection: {
        title: "एंटरप्राइज खाते",
      },
      headerTitle__account: "प्रोफाइल विवरण",
      headerTitle__security: "सुरक्षा",
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: "पुनः जनरेट करें",
          headerTitle: "बैकअप कोड",
          subtitle__regenerate:
            "नए सुरक्षित बैकअप कोड प्राप्त करें। पिछले बैकअप कोड हटा दिए जाएंगे और उनका उपयोग नहीं किया जा सकेगा।",
          title__regenerate: "बैकअप कोड पुनः जनरेट करें",
        },
        phoneCode: {
          actionLabel__setDefault: "डिफ़ॉल्ट के रूप में सेट करें",
          destructiveActionLabel: "हटाएँ",
        },
        primaryButton: "दो-चरणीय सत्यापन जोड़ें",
        title: "दो-चरणीय सत्यापन",
        totp: {
          destructiveActionTitle: "हटाएँ",
          headerTitle: "प्रमाणकर्ता एप्लिकेशन",
        },
      },
      passkeysSection: {
        menuAction__destructive: "हटाएँ",
        menuAction__rename: "नाम बदलें",
        primaryButton: "पासकी जोड़ें",
        title: "पासकी",
      },
      passwordSection: {
        primaryButton__setPassword: "पासवर्ड सेट करें",
        primaryButton__updatePassword: "पासवर्ड अपडेट करें",
        title: "पासवर्ड",
      },
      phoneNumbersSection: {
        destructiveAction: "फोन नंबर हटाएँ",
        detailsAction__nonPrimary: "प्राथमिक के रूप में सेट करें",
        detailsAction__primary: "सत्यापन पूरा करें",
        detailsAction__unverified: "फोन नंबर सत्यापित करें",
        primaryButton: "फोन नंबर जोड़ें",
        title: "फोन नंबर",
      },
      profileSection: {
        primaryButton: "प्रोफाइल अपडेट करें",
        title: "प्रोफाइल",
      },
      usernameSection: {
        primaryButton__setUsername: "उपयोगकर्ता नाम सेट करें",
        primaryButton__updateUsername: "उपयोगकर्ता नाम अपडेट करें",
        title: "उपयोगकर्ता नाम",
      },
      web3WalletsSection: {
        destructiveAction: "वॉलेट हटाएँ",
        detailsAction__nonPrimary: "प्राथमिक के रूप में सेट करें",
        primaryButton: "वॉलेट कनेक्ट करें",
        title: "Web3 वॉलेट",
      },
    },
    usernamePage: {
      successMessage: "आपका उपयोगकर्ता नाम अपडेट कर दिया गया है।",
      title__set: "उपयोगकर्ता नाम सेट करें",
      title__update: "उपयोगकर्ता नाम अपडेट करें",
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: "{{identifier}} को इस खाते से हटा दिया जाएगा।",
        messageLine2:
          "आप अब इस web3 वॉलेट का उपयोग करके साइन इन नहीं कर पाएंगे।",
        successMessage: "{{web3Wallet}} को आपके खाते से हटा दिया गया है।",
        title: "web3 वॉलेट हटाएँ",
      },
      subtitle__availableWallets:
        "अपने खाते से कनेक्ट करने के लिए एक web3 वॉलेट चुनें।",
      subtitle__unavailableWallets: "कोई उपलब्ध web3 वॉलेट नहीं हैं।",
      successMessage: "वॉलेट को आपके खाते में जोड़ दिया गया है।",
      title: "web3 वॉलेट जोड़ें",
      web3WalletButtonsBlockButton: "{{provider|titleize}}",
    },
  },
  waitlist: {
    start: {
      actionLink: "साइन इन करें",
      actionText: "पहले से ही पहुंच है?",
      formButton: "प्रतीक्षा सूची में शामिल हों",
      subtitle:
        "अपना ईमेल पता दर्ज करें और हम आपको बताएंगे जब आपका स्थान तैयार हो",
      title: "प्रतीक्षा सूची में शामिल हों",
    },
    success: {
      message: "आप जल्द ही रीडायरेक्ट किए जाएंगे...",
      subtitle: "जब आपका स्थान तैयार होगा तो हम आपसे संपर्क करेंगे",
      title: "प्रतीक्षा सूची में शामिल होने के लिए धन्यवाद!",
    },
  },
} as const;
