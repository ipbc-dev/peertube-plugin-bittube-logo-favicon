async function register ({
  registerSetting
}) {
  registerSetting({
    name: 'icon_url',
    label: "Icon Url (Type 'bittube' for BitTube standard icon)",
    type: 'input',
    private: false
  })
  registerSetting({
    name: 'icon_width',
    label: 'Icon width (example: 35px)',
    type: 'input',
    private: false
  })
  registerSetting({
    name: 'additional_css',
    label: "Additional Icon css (separated by ';')",
    type: 'input',
    private: false
  })
  registerSetting({
    name: 'favicon_url',
    label: "Favicon Url (Type 'bittube' for BitTube standard icon)",
    type: 'input',
    private: false
  })

}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
