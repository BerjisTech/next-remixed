export interface adodb_logsql {
  id: number;
  created: string;
  sql0: string;
  sql1: string;
  params: string;
  tracer: string;
  timer: number;
}

export interface TrainingData {
  certification_count: number;
  video_purchase_count: number;
  native_language_verification_count: number;
  training_courses_count: number;
}

export interface mdl_assign {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  alwaysshowdescription: number;
  nosubmissions: number;
  submissiondrafts: number;
  sendnotifications: number;
  sendlatenotifications: number;
  duedate: number;
  allowsubmissionsfromdate: number;
  grade: number;
  timemodified: number;
  requiresubmissionstatement: number;
  completionsubmit: number;
  cutoffdate: number;
  teamsubmission: number;
  requireallteammemberssubmit: number;
  teamsubmissiongroupingid: number;
  blindmarking: number;
  revealidentities: number;
  attemptreopenmethod: string;
  maxattempts: number;
}

export interface mdl_assignfeedback_comments {
  id: number;
  assignment: number;
  grade: number;
  commentstring: string;
  commentformat: number;
}

export interface mdl_assignfeedback_file {
  id: number;
  assignment: number;
  grade: number;
  numfiles: number;
}

export interface mdl_assignment {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  assignmenttype: string;
  resubmit: number;
  preventlate: number;
  emailteachers: number;
  var1: number;
  var2: number;
  var3: number;
  var4: number;
  var5: number;
  maxbytes: number;
  timedue: number;
  timeavailable: number;
  grade: number;
  timemodified: number;
}

export interface mdl_assignment_submissions {
  id: number;
  assignment: number;
  userid: number;
  timecreated: number;
  timemodified: number;
  numfiles: number;
  data1: string;
  data2: string;
  grade: number;
  submissioncomment: string;
  format: number;
  teacher: number;
  timemarked: number;
  mailed: number;
}

export interface mdl_assignsubmission_file {
  id: number;
  assignment: number;
  submission: number;
  numfiles: number;
}

export interface mdl_assignsubmission_onlinestring {
  id: number;
  assignment: number;
  submission: number;
  onlinestring: string;
  onlineformat: number;
}

export interface mdl_assign_grades {
  id: number;
  assignment: number;
  userid: number;
  timecreated: number;
  timemodified: number;
  grader: number;
  grade: number;
  attemptnumber: number;
}

export interface mdl_assign_plugin_config {
  id: number;
  assignment: number;
  plugin: string;
  subtype: string;
  name: string;
  value: string;
}

export interface mdl_assign_submission {
  id: number;
  assignment: number;
  userid: number;
  timecreated: number;
  timemodified: number;
  status: string;
  groupid: number;
  attemptnumber: number;
}

export interface mdl_assign_user_flags {
  id: number;
  userid: number;
  assignment: number;
  locked: number;
  mailed: number;
  extensionduedate: number;
}

export interface mdl_assign_user_mapping {
  id: number;
  assignment: number;
  userid: number;
}

export interface mdl_backup_controllers {
  id: number;
  backupid: string;
  operation: string;
  type: string;
  itemid: number;
  format: string;
  interactive: number;
  purpose: number;
  userid: number;
  status: number;
  execution: number;
  executiontime: number;
  checksum: string;
  timecreated: number;
  timemodified: number;
  controller: string;
}

export interface mdl_backup_courses {
  id: number;
  courseid: number;
  laststarttime: number;
  lastendtime: number;
  laststatus: string;
  nextstarttime: number;
}

export interface mdl_backup_files_template {
  id: number;
  backupid: string;
  constringid: number;
  component: string;
  filearea: string;
  itemid: number;
  info: string;
  newconstringid: number;
  newitemid: number;
}

export interface mdl_backup_ids_template {
  id: number;
  backupid: string;
  itemname: string;
  itemid: number;
  newitemid: number;
  parentitemid: number;
  info: string;
}

export interface mdl_backup_logs {
  id: number;
  backupid: string;
  loglevel: number;
  message: string;
  timecreated: number;
}

export interface mdl_badge {
  id: number;
  name: string;
  description: string;
  image: number;
  timecreated: number;
  timemodified: number;
  usercreated: number;
  usermodified: number;
  issuername: string;
  issuerurl: string;
  issuercontact: string;
  expiredate: number;
  expireperiod: number;
  type: number;
  courseid: number;
  message: string;
  messagesubject: string;
  attachment: number;
  notification: number;
  status: number;
  nextcron: number;
}

export interface mdl_badge_backpack {
  id: number;
  userid: number;
  email: string;
  backpackurl: string;
  backpackuid: number;
  autosync: number;
  password: string;
}

export interface mdl_badge_criteria {
  id: number;
  badgeid: number;
  criteriatype: number;
  method: number;
}

export interface mdl_badge_criteria_met {
  id: number;
  issuedid: number;
  critid: number;
  userid: number;
  datemet: number;
}

export interface mdl_badge_criteria_param {
  id: number;
  critid: number;
  name: string;
  value: string;
}

export interface mdl_badge_external {
  id: number;
  backpackid: number;
  collectionid: number;
}

export interface mdl_badge_issued {
  id: number;
  badgeid: number;
  userid: number;
  hash: string;
  dateissued: number;
  dateexpire: number;
  visible: number;
  issuernotified: number;
}

export interface mdl_badge_manual_award {
  id: number;
  badgeid: number;
  recipientid: number;
  issuerid: number;
  issuerrole: number;
  datemet: number;
}

export interface mdl_block {
  id: number;
  name: string;
  version: number;
  cron: number;
  lastcron: number;
  visible: number;
}

export interface mdl_block_community {
  id: number;
  userid: number;
  coursename: string;
  coursedescription: string;
  courseurl: string;
  imageurl: string;
}

export interface mdl_block_instances {
  id: number;
  blockname: string;
  parentconstringid: number;
  showinsubconstrings: number;
  pagetypepattern: string;
  subpagepattern: string;
  defaultweight: number;
  configdata: string;
  defaultregion: string;
}

export interface mdl_block_positions {
  id: number;
  blockinstanceid: number;
  constringid: number;
  pagetype: string;
  subpage: string;
  visible: number;
  region: string;
  weight: number;
}

export interface mdl_block_rss_client {
  id: number;
  userid: number;
  title: string;
  preferredtitle: string;
  description: string;
  shared: number;
  url: string;
}

export interface mdl_blog_association {
  id: number;
  constringid: number;
  blogid: number;
}

export interface mdl_blog_external {
  id: number;
  userid: number;
  name: string;
  description: string;
  url: string;
  filtertags: string;
  failedlastsync: number;
  timemodified: number;
  timefetched: number;
}

export interface mdl_book {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  numbering: number;
  customtitles: number;
  revision: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_book_chapters {
  id: number;
  bookid: number;
  pagenum: number;
  subchapter: number;
  title: string;
  content: string;
  contentformat: number;
  hidden: number;
  timecreated: number;
  timemodified: number;
  importsrc: string;
}

export interface mdl_cache_filters {
  id: number;
  filter: string;
  version: number;
  md5key: string;
  rawstring: string;
  timemodified: number;
}

export interface mdl_cache_flags {
  id: number;
  flagtype: string;
  name: string;
  timemodified: number;
  value: string;
  expiry: number;
}

export interface mdl_cache_string {
  id: number;
  md5key: string;
  formattedstring: string;
  timemodified: number;
}

export interface mdl_capabilities {
  id: number;
  name: string;
  captype: string;
  constringlevel: number;
  component: string;
  riskbitmask: number;
}

export interface mdl_chat {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  keepdays: number;
  studentlogs: number;
  chattime: number;
  schedule: number;
  timemodified: number;
}

export interface mdl_chat_messages {
  id: number;
  chatid: number;
  userid: number;
  groupid: number;
  system: number;
  message: string;
  timestamp: number;
}

export interface mdl_chat_messages_current {
  id: number;
  chatid: number;
  userid: number;
  groupid: number;
  system: number;
  message: string;
  timestamp: number;
}

export interface mdl_chat_users {
  id: number;
  chatid: number;
  userid: number;
  groupid: number;
  version: string;
  ip: string;
  firstping: number;
  lastping: number;
  lastmessageping: number;
  sid: string;
  course: number;
  lang: string;
}

export interface mdl_choice {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  publish: number;
  showresults: number;
  display: number;
  allowupdate: number;
  showunanswered: number;
  limitanswers: number;
  timeopen: number;
  timeclose: number;
  timemodified: number;
  completionsubmit: number;
}

export interface mdl_choice_answers {
  id: number;
  choiceid: number;
  userid: number;
  optionid: number;
  timemodified: number;
}

export interface mdl_choice_options {
  id: number;
  choiceid: number;
  string: string;
  maxanswers: number;
  timemodified: number;
}

export interface mdl_cohort {
  id: number;
  constringid: number;
  name: string;
  idnumber: string;
  description: string;
  descriptionformat: number;
  component: string;
  timecreated: number;
  timemodified: number;
}

export interface mdl_cohort_members {
  id: number;
  cohortid: number;
  userid: number;
  timeadded: number;
}

export interface mdl_comments {
  id: number;
  constringid: number;
  commentarea: string;
  itemid: number;
  content: string;
  format: number;
  userid: number;
  timecreated: number;
}

export interface mdl_config {
  id: number;
  name: string;
  value: string;
}

export interface mdl_config_log {
  id: number;
  userid: number;
  timemodified: number;
  plugin: string;
  name: string;
  value: string;
  oldvalue: string;
}

export interface mdl_config_plugins {
  id: number;
  plugin: string;
  name: string;
  value: string;
}

export interface mdl_constring {
  id: number;
  constringlevel: number;
  instanceid: number;
  path: string;
  depth: number;
}

export interface mdl_constring_temp {
  id: number;
  path: string;
  depth: number;
}

export interface mdl_course {
  imageurl: any;
  id: number;
  category: number;
  sortorder: number;
  fullname: string;
  shortname: string;
  idnumber: string;
  summary: string;
  summaryformat: number;
  format: string;
  showgrades: number;
  sectioncache: string;
  modinfo: string;
  newsitems: number;
  startdate: number;
  marker: number;
  maxbytes: number;
  legacyfiles: number;
  showreports: number;
  visible: number;
  visibleold: number;
  groupmode: number;
  groupmodeforce: number;
  defaultgroupingid: number;
  lang: string;
  theme: string;
  timecreated: number;
  timemodified: number;
  requested: number;
  enablecompletion: number;
  completionnotify: number;
  category_name?: string;
  creator_firstname?: string;
  creator_lastname?: string;
}

export interface mdl_course_categories {
  id: number;
  name: string;
  idnumber: string;
  description: string;
  descriptionformat: number;
  parent: number;
  sortorder: number;
  coursecount: number;
  visible: number;
  visibleold: number;
  timemodified: number;
  depth: number;
  path: string;
  theme: string;
}

export interface mdl_course_completions {
  id: number;
  userid: number;
  course: number;
  timeenrolled: number;
  timestarted: number;
  timecompleted: number;
  reaggregate: number;
}

export interface mdl_course_completion_aggr_methd {
  id: number;
  course: number;
  criteriatype: number;
  method: number;
  value: number;
}

export interface mdl_course_completion_criteria {
  id: number;
  course: number;
  criteriatype: number;
  module: string;
  moduleinstance: number;
  courseinstance: number;
  enrolperiod: number;
  timeend: number;
  gradepass: number;
  role: number;
}

export interface mdl_course_completion_crit_compl {
  id: number;
  userid: number;
  course: number;
  criteriaid: number;
  gradefinal: number;
  unenroled: number;
  timecompleted: number;
}

export interface mdl_course_format_options {
  id: number;
  courseid: number;
  format: string;
  sectionid: number;
  name: string;
  value: string;
}

export interface mdl_course_modules {
  id: number;
  course: number;
  module: number;
  instance: number;
  section: number;
  idnumber: string;
  added: number;
  score: number;
  indent: number;
  visible: number;
  visibleold: number;
  groupmode: number;
  groupingid: number;
  groupmembersonly: number;
  completion: number;
  completiongradeitemnumber: number;
  completionview: number;
  completionexpected: number;
  availablefrom: number;
  availableuntil: number;
  showavailability: number;
  showdescription: number;
}

export interface mdl_course_modules_availability {
  id: number;
  coursemoduleid: number;
  sourcecmid: number;
  requiredcompletion: number;
  gradeitemid: number;
  grademin: number;
  grademax: number;
}

export interface mdl_course_modules_avail_fields {
  id: number;
  coursemoduleid: number;
  userfield: string;
  customfieldid: number;
  operator: string;
  value: string;
}

export interface mdl_course_modules_completion {
  id: number;
  coursemoduleid: number;
  userid: number;
  completionstate: number;
  viewed: number;
  timemodified: number;
}

export interface mdl_course_published {
  id: number;
  huburl: string;
  courseid: number;
  timepublished: number;
  enrollable: number;
  hubcourseid: number;
  status: number;
  timechecked: number;
}

export interface mdl_course_request {
  id: number;
  fullname: string;
  shortname: string;
  summary: string;
  summaryformat: number;
  category: number;
  reason: string;
  requester: number;
  password: string;
}

export interface mdl_course_sections {
  id: number;
  course: number;
  section: number;
  name: string;
  summary: string;
  summaryformat: number;
  sequence: string;
  visible: number;
  availablefrom: number;
  availableuntil: number;
  showavailability: number;
  groupingid: number;
}

export interface mdl_course_sections_availability {
  id: number;
  coursesectionid: number;
  sourcecmid: number;
  requiredcompletion: number;
  gradeitemid: number;
  grademin: number;
  grademax: number;
}

export interface mdl_course_sections_avail_fields {
  id: number;
  coursesectionid: number;
  userfield: string;
  customfieldid: number;
  operator: string;
  value: string;
}

export interface mdl_data {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  comments: number;
  timeavailablefrom: number;
  timeavailableto: number;
  timeviewfrom: number;
  timeviewto: number;
  requiredentries: number;
  requiredentriestoview: number;
  maxentries: number;
  rssarticles: number;
  singletemplate: string;
  listtemplate: string;
  listtemplateheader: string;
  listtemplatefooter: string;
  addtemplate: string;
  rsstemplate: string;
  rsstitletemplate: string;
  csstemplate: string;
  jstemplate: string;
  asearchtemplate: string;
  approval: number;
  scale: number;
  assessed: number;
  assesstimestart: number;
  assesstimefinish: number;
  defaultsort: number;
  defaultsortdir: number;
  editany: number;
  notification: number;
}

export interface mdl_data_content {
  id: number;
  fieldid: number;
  recordid: number;
  content: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
}

export interface mdl_data_fields {
  id: number;
  dataid: number;
  type: string;
  name: string;
  description: string;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
  param5: string;
  param6: string;
  param7: string;
  param8: string;
  param9: string;
  param10: string;
}

export interface mdl_data_records {
  id: number;
  userid: number;
  groupid: number;
  dataid: number;
  timecreated: number;
  timemodified: number;
  approved: number;
}

export interface mdl_enrol {
  id: number;
  enrol: string;
  status: number;
  courseid: number;
  sortorder: number;
  name: string;
  enrolperiod: number;
  enrolstartdate: number;
  enrolenddate: number;
  expirynotify: number;
  expirythreshold: number;
  notifyall: number;
  password: string;
  cost: string;
  currency: string;
  roleid: number;
  customint1: number;
  customint2: number;
  customint3: number;
  customint4: number;
  customint5: number;
  customint6: number;
  customint7: number;
  customint8: number;
  customchar1: string;
  customchar2: string;
  customchar3: string;
  customdec1: number;
  customdec2: number;
  customstring1: string;
  customstring2: string;
  customstring3: string;
  customstring4: string;
  timecreated: number;
  timemodified: number;
}

export interface mdl_enrol_authorize {
  id: number;
  paymentmethod: string;
  refundinfo: number;
  ccname: string;
  courseid: number;
  userid: number;
  instanceid: number;
  transid: number;
  status: number;
  timecreated: number;
  settletime: number;
  amount: string;
  currency: string;
}

export interface mdl_enrol_authorize_refunds {
  id: number;
  orderid: number;
  status: number;
  amount: string;
  transid: number;
  settletime: number;
}

export interface mdl_enrol_flatfile {
  id: number;
  action: string;
  roleid: number;
  userid: number;
  courseid: number;
  timestart: number;
  timeend: number;
  timemodified: number;
}

export interface mdl_enrol_paypal {
  id: number;
  business: string;
  receiver_email: string;
  receiver_id: string;
  item_name: string;
  courseid: number;
  userid: number;
  instanceid: number;
  memo: string;
  tax: string;
  option_name1: string;
  option_selection1_x: string;
  option_name2: string;
  option_selection2_x: string;
  payment_status: string;
  pending_reason: string;
  reason_code: string;
  txn_id: string;
  parent_txn_id: string;
  payment_type: string;
  timeupdated: number;
}

export interface mdl_event {
  id: number;
  name: string;
  description: string;
  format: number;
  courseid: number;
  groupid: number;
  userid: number;
  repeatid: number;
  modulename: string;
  instance: number;
  eventtype: string;
  timestart: number;
  timeduration: number;
  visible: number;
  uuid: string;
  sequence: number;
  timemodified: number;
  subscriptionid: number;
}

export interface mdl_events_handlers {
  id: number;
  eventname: string;
  component: string;
  handlerfile: string;
  handlerfunction: string;
  schedule: string;
  status: number;
  internal: number;
}

export interface mdl_events_queue {
  id: number;
  eventdata: string;
  stackdump: string;
  userid: number;
  timecreated: number;
}

export interface mdl_events_queue_handlers {
  id: number;
  queuedeventid: number;
  handlerid: number;
  status: number;
  errormessage: string;
  timemodified: number;
}

export interface mdl_event_subscriptions {
  id: number;
  url: string;
  courseid: number;
  groupid: number;
  userid: number;
  eventtype: string;
  pollinterval: number;
  lastupdated: number;
  name: string;
}

export interface mdl_external_functions {
  id: number;
  name: string;
  classname: string;
  methodname: string;
  classpath: string;
  component: string;
  capabilities: string;
}

export interface mdl_external_services {
  id: number;
  name: string;
  enabled: number;
  requiredcapability: string;
  restrictedusers: number;
  component: string;
  timecreated: number;
  timemodified: number;
  shortname: string;
  downloadfiles: number;
}

export interface mdl_external_services_functions {
  id: number;
  externalserviceid: number;
  functionname: string;
}

export interface mdl_external_services_users {
  id: number;
  externalserviceid: number;
  userid: number;
  iprestriction: string;
  validuntil: number;
  timecreated: number;
}

export interface mdl_external_tokens {
  id: number;
  token: string;
  tokentype: number;
  userid: number;
  externalserviceid: number;
  sid: string;
  constringid: number;
  creatorid: number;
  iprestriction: string;
  validuntil: number;
  timecreated: number;
  lastaccess: number;
}

export interface mdl_feedback {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  anonymous: number;
  email_notification: number;
  multiple_submit: number;
  autonumbering: number;
  site_after_submit: string;
  page_after_submit: string;
  page_after_submitformat: number;
  publish_stats: number;
  timeopen: number;
  timeclose: number;
  timemodified: number;
  completionsubmit: number;
}

export interface mdl_feedback_completed {
  id: number;
  feedback: number;
  userid: number;
  timemodified: number;
  random_response: number;
  anonymous_response: number;
}

export interface mdl_feedback_completedtmp {
  id: number;
  feedback: number;
  userid: number;
  guestid: string;
  timemodified: number;
  random_response: number;
  anonymous_response: number;
}

export interface mdl_feedback_item {
  id: number;
  feedback: number;
  template: number;
  name: string;
  label: string;
  presentation: string;
  typ: string;
  hasvalue: number;
  position: number;
  required: number;
  dependitem: number;
  dependvalue: string;
  options: string;
}

export interface mdl_feedback_sitecourse_map {
  id: number;
  feedbackid: number;
  courseid: number;
}

export interface mdl_feedback_template {
  id: number;
  course: number;
  ispublic: number;
  name: string;
}

export interface mdl_feedback_tracking {
  id: number;
  userid: number;
  feedback: number;
  completed: number;
  tmp_completed: number;
}

export interface mdl_feedback_value {
  id: number;
  course_id: number;
  item: number;
  completed: number;
  tmp_completed: number;
  value: string;
}

export interface mdl_feedback_valuetmp {
  id: number;
  course_id: number;
  item: number;
  completed: number;
  tmp_completed: number;
  value: string;
}

export interface mdl_files {
  id: number;
  contenthash: string;
  pathnamehash: string;
  constringid: number;
  component: string;
  filearea: string;
  itemid: number;
  filepath: string;
  filename: string;
  userid: number;
  filesize: number;
  mimetype: string;
  status: number;
  source: string;
  author: string;
  license: string;
  timecreated: number;
  timemodified: number;
  sortorder: number;
  referencefileid: number;
  referencelastsync: number;
  referencelifetime: number;
}

export interface mdl_files_reference {
  id: number;
  repositoryid: number;
  lastsync: number;
  lifetime: number;
  reference: string;
  referencehash: string;
}

export interface mdl_filter_active {
  id: number;
  filter: string;
  constringid: number;
  active: number;
  sortorder: number;
}

export interface mdl_filter_config {
  id: number;
  filter: string;
  constringid: number;
  name: string;
  value: string;
}

export interface mdl_folder {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  revision: number;
  showexpanded: number;
  timemodified: number;
  display: number;
}

export interface mdl_forum {
  id: number;
  course: number;
  type: string;
  name: string;
  intro: string;
  introformat: number;
  assessed: number;
  assesstimestart: number;
  assesstimefinish: number;
  scale: number;
  maxbytes: number;
  maxattachments: number;
  forcesubscribe: number;
  trackingtype: number;
  rsstype: number;
  rssarticles: number;
  timemodified: number;
  warnafter: number;
  blockafter: number;
  blockperiod: number;
  completiondiscussions: number;
  completionreplies: number;
  completionposts: number;
  displaywordcount: number;
}

export interface mdl_forum_discussions {
  id: number;
  course: number;
  forum: number;
  name: string;
  firstpost: number;
  userid: number;
  groupid: number;
  assessed: number;
  timemodified: number;
  usermodified: number;
  timestart: number;
  timeend: number;
}

export interface mdl_forum_posts {
  id: number;
  discussion: number;
  parent: number;
  userid: number;
  created: number;
  modified: number;
  mailed: number;
  subject: string;
  message: string;
  messageformat: number;
  messagetrust: number;
  attachment: string;
  totalscore: number;
  mailnow: number;
}

export interface mdl_forum_queue {
  id: number;
  userid: number;
  discussionid: number;
  postid: number;
  timemodified: number;
}

export interface mdl_forum_read {
  id: number;
  userid: number;
  forumid: number;
  discussionid: number;
  postid: number;
  firstread: number;
  lastread: number;
}

export interface mdl_forum_subscriptions {
  id: number;
  userid: number;
  forum: number;
}

export interface mdl_forum_track_prefs {
  id: number;
  userid: number;
  forumid: number;
}

export interface mdl_glossary {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  allowduplicatedentries: number;
  displayformat: string;
  mainglossary: number;
  showspecial: number;
  showalphabet: number;
  showall: number;
  allowcomments: number;
  allowprintview: number;
  usedynalink: number;
  defaultapproval: number;
  approvaldisplayformat: string;
  globalglossary: number;
  entbypage: number;
  editalways: number;
  rsstype: number;
  rssarticles: number;
  assessed: number;
  assesstimestart: number;
  assesstimefinish: number;
  scale: number;
  timecreated: number;
  timemodified: number;
  completionentries: number;
}

export interface mdl_glossary_alias {
  id: number;
  entryid: number;
  alias: string;
}

export interface mdl_glossary_categories {
  id: number;
  glossaryid: number;
  name: string;
  usedynalink: number;
}

export interface mdl_glossary_entries {
  id: number;
  glossaryid: number;
  userid: number;
  concept: string;
  definition: string;
  definitionformat: number;
  definitiontrust: number;
  attachment: string;
  timecreated: number;
  timemodified: number;
  teacherentry: number;
  sourceglossaryid: number;
  usedynalink: number;
  casesensitive: number;
  fullmatch: number;
  approved: number;
}

export interface mdl_glossary_entries_categories {
  id: number;
  categoryid: number;
  entryid: number;
}

export interface mdl_glossary_formats {
  id: number;
  name: string;
  popupformatname: string;
  visible: number;
  showgroup: number;
  defaultmode: string;
  defaulthook: string;
  sortkey: string;
  sortorder: string;
}

export interface mdl_grade_categories {
  id: number;
  courseid: number;
  parent: number;
  depth: number;
  path: string;
  fullname: string;
  aggregation: number;
  keephigh: number;
  droplow: number;
  aggregateonlygraded: number;
  aggregateoutcomes: number;
  aggregatesubcats: number;
  timecreated: number;
  timemodified: number;
  hidden: number;
}

export interface mdl_grade_categories_history {
  id: number;
  action: number;
  oldid: number;
  source: string;
  timemodified: number;
  hidden: number;
  loggeduser: number;
  courseid: number;
  parent: number;
  depth: number;
  path: string;
  fullname: string;
  aggregation: number;
  keephigh: number;
  droplow: number;
  aggregateonlygraded: number;
  aggregateoutcomes: number;
  aggregatesubcats: number;
}

export interface mdl_grade_grades {
  id: number;
  itemid: number;
  userid: number;
  rawgrade: number;
  rawgrademax: number;
  rawgrademin: number;
  rawscaleid: number;
  usermodified: number;
  finalgrade: number;
  hidden: number;
  locked: number;
  locktime: number;
  exported: number;
  overridden: number;
  excluded: number;
  feedback: string;
  feedbackformat: number;
  information: string;
  informationformat: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_grade_grades_history {
  id: number;
  action: number;
  oldid: number;
  source: string;
  timemodified: number;
  loggeduser: number;
  itemid: number;
  userid: number;
  rawgrade: number;
  rawgrademax: number;
  rawgrademin: number;
  rawscaleid: number;
  usermodified: number;
  finalgrade: number;
  hidden: number;
  locked: number;
  locktime: number;
  exported: number;
  overridden: number;
  excluded: number;
  feedback: string;
  feedbackformat: number;
  information: string;
  informationformat: number;
}

export interface mdl_grade_import_newitem {
  id: number;
  itemname: string;
  importcode: number;
  importer: number;
}

export interface mdl_grade_import_values {
  id: number;
  itemid: number;
  newgradeitem: number;
  userid: number;
  finalgrade: number;
  feedback: string;
  importcode: number;
  importer: number;
}

export interface mdl_grade_items {
  id: number;
  courseid: number;
  categoryid: number;
  itemname: string;
  itemtype: string;
  itemmodule: string;
  iteminstance: number;
  itemnumber: number;
  iteminfo: string;
  idnumber: string;
  calculation: string;
  gradetype: number;
  grademax: number;
  grademin: number;
  scaleid: number;
  outcomeid: number;
  gradepass: number;
  multfactor: number;
  plusfactor: number;
  aggregationcoef: number;
  sortorder: number;
  display: number;
  numbers: number;
  hidden: number;
  locked: number;
  locktime: number;
  needsupdate: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_grade_items_history {
  id: number;
  action: number;
  oldid: number;
  source: string;
  timemodified: number;
  loggeduser: number;
  courseid: number;
  categoryid: number;
  itemname: string;
  itemtype: string;
  itemmodule: string;
  iteminstance: number;
  itemnumber: number;
  iteminfo: string;
  idnumber: string;
  calculation: string;
  gradetype: number;
  grademax: number;
  grademin: number;
  scaleid: number;
  outcomeid: number;
  gradepass: number;
  multfactor: number;
  plusfactor: number;
  aggregationcoef: number;
  sortorder: number;
  display: number;
  numbers: number;
  hidden: number;
  locked: number;
  locktime: number;
  needsupdate: number;
}

export interface mdl_grade_letters {
  id: number;
  constringid: number;
  lowerboundary: number;
  letter: string;
}

export interface mdl_grade_outcomes {
  id: number;
  courseid: number;
  shortname: string;
  fullname: string;
  scaleid: number;
  description: string;
  descriptionformat: number;
  timecreated: number;
  timemodified: number;
  usermodified: number;
}

export interface mdl_grade_outcomes_courses {
  id: number;
  courseid: number;
  outcomeid: number;
}

export interface mdl_grade_outcomes_history {
  id: number;
  action: number;
  oldid: number;
  source: string;
  timemodified: number;
  loggeduser: number;
  courseid: number;
  shortname: string;
  fullname: string;
  scaleid: number;
  description: string;
  descriptionformat: number;
}

export interface mdl_grade_settings {
  id: number;
  courseid: number;
  name: string;
  value: string;
}

export interface mdl_gradingform_guide_comments {
  id: number;
  definitionid: number;
  sortorder: number;
  description: string;
  descriptionformat: number;
}

export interface mdl_gradingform_guide_criteria {
  id: number;
  definitionid: number;
  sortorder: number;
  shortname: string;
  description: string;
  descriptionformat: number;
  descriptionmarkers: string;
  descriptionmarkersformat: number;
  maxscore: number;
}

export interface mdl_gradingform_guide_fillings {
  id: number;
  instanceid: number;
  criterionid: number;
  remark: string;
  remarkformat: number;
  score: number;
}

export interface mdl_gradingform_rubric_criteria {
  id: number;
  definitionid: number;
  sortorder: number;
  description: string;
  descriptionformat: number;
}

export interface mdl_gradingform_rubric_fillings {
  id: number;
  instanceid: number;
  criterionid: number;
  levelid: number;
  remark: string;
  remarkformat: number;
}

export interface mdl_gradingform_rubric_levels {
  id: number;
  criterionid: number;
  score: number;
  definition: string;
  definitionformat: number;
}

export interface mdl_grading_areas {
  id: number;
  constringid: number;
  component: string;
  areaname: string;
  activemethod: string;
}

export interface mdl_grading_definitions {
  id: number;
  areaid: number;
  method: string;
  name: string;
  description: string;
  descriptionformat: number;
  status: number;
  copiedfromid: number;
  timecreated: number;
  usercreated: number;
  timemodified: number;
  usermodified: number;
  timecopied: number;
  options: string;
}

export interface mdl_grading_instances {
  id: number;
  definitionid: number;
  raterid: number;
  itemid: number;
  rawgrade: number;
  status: number;
  feedback: string;
  feedbackformat: number;
  timemodified: number;
}

export interface mdl_groupings {
  id: number;
  courseid: number;
  name: string;
  idnumber: string;
  description: string;
  descriptionformat: number;
  configdata: string;
  timecreated: number;
  timemodified: number;
}

export interface mdl_groupings_groups {
  id: number;
  groupingid: number;
  groupid: number;
  timeadded: number;
}

export interface mdl_groups {
  id: number;
  courseid: number;
  idnumber: string;
  name: string;
  description: string;
  descriptionformat: number;
  enrolmentkey: string;
  picture: number;
  hidepicture: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_groups_members {
  id: number;
  groupid: number;
  userid: number;
  timeadded: number;
  component: string;
  itemid: number;
}

export interface mdl_hotpot {
  id: number;
  course: number;
  name: string;
  sourcefile: string;
  sourcetype: string;
  sourcelocation: number;
  configfile: string;
  configlocation: number;
  entrycm: number;
  entrygrade: number;
  entrypage: number;
  entrystring: string;
  entryformat: number;
  entryoptions: number;
  exitpage: number;
  exitstring: string;
  exitformat: number;
  exitoptions: number;
  exitcm: number;
  exitgrade: number;
  outputformat: string;
  navigation: number;
  title: number;
  stopbutton: number;
  stopstring: string;
  usefilters: number;
  useglossary: number;
  usemediafilter: string;
  studentfeedback: number;
  studentfeedbackurl: string;
  timeopen: number;
  timeclose: number;
  timelimit: number;
  delay1: number;
  delay2: number;
  delay3: number;
  reviewoptions: number;
  attemptlimit: number;
  gradeweighting: number;
  grademethod: number;
  password: string;
  subnet: string;
  clickreporting: number;
  discarddetails: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_hotpot_attempts {
  id: number;
  hotpotid: number;
  userid: number;
  starttime: number;
  endtime: number;
  score: number;
  penalties: number;
  attempt: number;
  timestart: number;
  timefinish: number;
  status: number;
  clickreportid: number;
  timemodified: number;
}

export interface mdl_hotpot_cache {
  id: number;
  hotpotid: number;
  slasharguments: string;
  hotpot_enableobfuscate: string;
  hotpot_enableswf: string;
  name: string;
  sourcefile: string;
  sourcetype: string;
  sourcelocation: number;
  sourcelastmodified: string;
  sourceetag: string;
  configfile: string;
  configlocation: number;
  configlastmodified: string;
  configetag: string;
  navigation: number;
  title: number;
  stopbutton: number;
  stopstring: string;
  usefilters: number;
  useglossary: number;
  usemediafilter: string;
  studentfeedback: number;
  studentfeedbackurl: string;
  timelimit: number;
  delay3: number;
  clickreporting: number;
  content: string;
  timemodified: number;
  md5key: string;
}

export interface mdl_hotpot_details {
  id: number;
  attemptid: number;
  details: string;
}

export interface mdl_hotpot_questions {
  id: number;
  name: string;
  type: number;
  string: number;
  hotpotid: number;
  md5key: string;
}

export interface mdl_hotpot_responses {
  id: number;
  attemptid: number;
  questionid: number;
  score: number;
  weighting: number;
  correct: string;
  wrong: string;
  ignored: string;
  hints: number;
  clues: number;
  checks: number;
}

export interface mdl_hotpot_strings {
  id: number;
  string: string;
  md5key: string;
}

export interface mdl_imscp {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  revision: number;
  keepold: number;
  structure: string;
  timemodified: number;
}

export interface mdl_label {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  timemodified: number;
}

export interface mdl_lesson {
  id: number;
  course: number;
  name: string;
  practice: number;
  modattempts: number;
  usepassword: number;
  password: string;
  dependency: number;
  conditions: string;
  grade: number;
  custom: number;
  ongoing: number;
  usemaxgrade: number;
  maxanswers: number;
  maxattempts: number;
  review: number;
  nextpagedefault: number;
  feedback: number;
  minquestions: number;
  maxpages: number;
  timed: number;
  maxtime: number;
  retake: number;
  activitylink: number;
  mediafile: string;
  mediaheight: number;
  mediawidth: number;
  mediaclose: number;
  slideshow: number;
  width: number;
  height: number;
  bgcolor: string;
  displayleft: number;
  displayleftif: number;
  progressbar: number;
  highscores: number;
  maxhighscores: number;
  available: number;
  deadline: number;
  timemodified: number;
}

export interface mdl_lesson_answers {
  id: number;
  lessonid: number;
  pageid: number;
  jumpto: number;
  grade: number;
  score: number;
  flags: number;
  timecreated: number;
  timemodified: number;
  answer: string;
  answerformat: number;
  response: string;
  responseformat: number;
}

export interface mdl_lesson_attempts {
  id: number;
  lessonid: number;
  pageid: number;
  userid: number;
  answerid: number;
  retry: number;
  correct: number;
  useranswer: string;
  timeseen: number;
}

export interface mdl_lesson_branch {
  id: number;
  lessonid: number;
  userid: number;
  pageid: number;
  retry: number;
  flag: number;
  timeseen: number;
}

export interface mdl_lesson_grades {
  id: number;
  lessonid: number;
  userid: number;
  grade: number;
  late: number;
  completed: number;
}

export interface mdl_lesson_high_scores {
  id: number;
  lessonid: number;
  userid: number;
  gradeid: number;
  nickname: string;
}

export interface mdl_lesson_pages {
  id: number;
  lessonid: number;
  prevpageid: number;
  nextpageid: number;
  qtype: number;
  qoption: number;
  layout: number;
  display: number;
  timecreated: number;
  timemodified: number;
  title: string;
  contents: string;
  contentsformat: number;
}

export interface mdl_lesson_timer {
  id: number;
  lessonid: number;
  userid: number;
  starttime: number;
  lessontime: number;
}

export interface mdl_license {
  id: number;
  shortname: string;
  fullname: string;
  source: string;
  enabled: number;
  version: number;
}

export interface mdl_log {
  id: number;
  time: number;
  userid: number;
  ip: string;
  course: number;
  module: string;
  cmid: number;
  action: string;
  url: string;
  info: string;
}

export interface mdl_log_display {
  id: number;
  module: string;
  action: string;
  mtable: string;
  field: string;
  component: string;
}

export interface mdl_log_queries {
  id: number;
  qtype: number;
  sqlstring: string;
  sqlparams: string;
  error: number;
  info: string;
  backtrace: string;
  exectime: number;
  timelogged: number;
}

export interface mdl_lti {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  timecreated: number;
  timemodified: number;
  typeid: number;
  toolurl: string;
  securetoolurl: string;
  instructorchoicesendname: number;
  instructorchoicesendemailaddr: number;
  instructorchoiceallowroster: number;
  instructorchoiceallowsetting: number;
  instructorcustomparameters: string;
  instructorchoiceacceptgrades: number;
  grade: number;
  launchcontainer: number;
  resourcekey: string;
  password: string;
  debuglaunch: number;
  showtitlelaunch: number;
  showdescriptionlaunch: number;
  servicesalt: string;
  icon: string;
  secureicon: string;
}

export interface mdl_lti_submission {
  id: number;
  ltiid: number;
  userid: number;
  datesubmitted: number;
  dateupdated: number;
  gradepercent: number;
  originalgrade: number;
  launchid: number;
  state: number;
}

export interface mdl_lti_types {
  id: number;
  name: string;
  baseurl: string;
  tooldomain: string;
  state: number;
  course: number;
  coursevisible: number;
  createdby: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_lti_types_config {
  id: number;
  typeid: number;
  name: string;
  value: string;
}

export interface mdl_message {
  id: number;
  useridfrom: number;
  useridto: number;
  fullmessage: string;
  fullmessageformat: number;
  timecreated: number;
  subject: string;
  fullmessagehtml: string;
  smallmessage: string;
  notification: number;
  constringurl: string;
  constringurlname: string;
}

export interface mdl_message_contacts {
  id: number;
  userid: number;
  contactid: number;
  blocked: number;
}

export interface mdl_message_processors {
  id: number;
  name: string;
  enabled: number;
}

export interface mdl_message_providers {
  id: number;
  name: string;
  component: string;
  capability: string;
}

export interface mdl_message_read {
  id: number;
  useridfrom: number;
  useridto: number;
  fullmessage: string;
  fullmessageformat: number;
  timecreated: number;
  timeread: number;
  subject: string;
  fullmessagehtml: string;
  smallmessage: string;
  notification: number;
  constringurl: string;
  constringurlname: string;
}

export interface mdl_message_working {
  id: number;
  unreadmessageid: number;
  processorid: number;
}

export interface mdl_mnetservice_enrol_courses {
  id: number;
  hostid: number;
  remoteid: number;
  categoryid: number;
  categoryname: string;
  sortorder: number;
  fullname: string;
  shortname: string;
  idnumber: string;
  summary: string;
  summaryformat: number;
  startdate: number;
  roleid: number;
  rolename: string;
}

export interface mdl_mnetservice_enrol_enrolments {
  id: number;
  hostid: number;
  userid: number;
  remotecourseid: number;
  rolename: string;
  enroltime: number;
  enroltype: string;
}

export interface mdl_mnet_application {
  id: number;
  name: string;
  display_name: string;
  xmlrpc_server_url: string;
  sso_land_url: string;
  sso_jump_url: string;
}

export interface mdl_mnet_host {
  id: number;
  deleted: number;
  wwwroot: string;
  ip_address: string;
  name: string;
  public_key: string;
  public_key_expires: number;
  transport: number;
  portno: number;
  last_connect_time: number;
  last_log_id: number;
  force_theme: number;
  theme: string;
  applicationid: number;
}

export interface mdl_mnet_host2service {
  id: number;
  hostid: number;
  serviceid: number;
  publish: number;
  subscribe: number;
}

export interface mdl_mnet_log {
  id: number;
  hostid: number;
  remoteid: number;
  time: number;
  userid: number;
  ip: string;
  course: number;
  coursename: string;
  module: string;
  cmid: number;
  action: string;
  url: string;
  info: string;
}

export interface mdl_mnet_remote_rpc {
  id: number;
  functionname: string;
  xmlrpcpath: string;
  plugintype: string;
  pluginname: string;
  enabled: number;
}

export interface mdl_mnet_remote_service2rpc {
  id: number;
  serviceid: number;
  rpcid: number;
}

export interface mdl_mnet_rpc {
  id: number;
  functionname: string;
  xmlrpcpath: string;
  plugintype: string;
  pluginname: string;
  enabled: number;
  help: string;
  profile: string;
  filename: string;
  classname: string;
  static: number;
}

export interface mdl_mnet_service {
  id: number;
  name: string;
  description: string;
  apiversion: string;
  offer: number;
}

export interface mdl_mnet_service2rpc {
  id: number;
  serviceid: number;
  rpcid: number;
}

export interface mdl_mnet_session {
  id: number;
  userid: number;
  username: string;
  token: string;
  mnethostid: number;
  useragent: string;
  confirm_timeout: number;
  session_id: string;
  expires: number;
}

export interface mdl_mnet_sso_access_control {
  id: number;
  username: string;
  mnet_host_id: number;
  accessctrl: string;
}

export interface mdl_modules {
  id: number;
  name: string;
  version: number;
  cron: number;
  lastcron: number;
  search: string;
  visible: number;
}

export interface mdl_my_pages {
  id: number;
  userid: number;
  name: string;
  private: number;
  sortorder: number;
}

export interface mdl_page {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  content: string;
  contentformat: number;
  legacyfiles: number;
  legacyfileslast: number;
  display: number;
  displayoptions: string;
  revision: number;
  timemodified: number;
}

export interface mdl_portfolio_instance {
  id: number;
  plugin: string;
  name: string;
  visible: number;
}

export interface mdl_portfolio_instance_config {
  id: number;
  instance: number;
  name: string;
  value: string;
}

export interface mdl_portfolio_instance_user {
  id: number;
  instance: number;
  userid: number;
  name: string;
  value: string;
}

export interface mdl_portfolio_log {
  id: number;
  userid: number;
  time: number;
  portfolio: number;
  caller_class: string;
  caller_file: string;
  caller_component: string;
  caller_sha1: string;
  tempdataid: number;
  returnurl: string;
  continueurl: string;
}

export interface mdl_portfolio_mahara_queue {
  id: number;
  transferid: number;
  token: string;
}

export interface mdl_portfolio_tempdata {
  id: number;
  data: string;
  expirytime: number;
  userid: number;
  instance: number;
}

export interface mdl_post {
  id: number;
  module: string;
  userid: number;
  courseid: number;
  groupid: number;
  moduleid: number;
  coursemoduleid: number;
  subject: string;
  summary: string;
  content: string;
  hash: string;
  rating: number;
  format: number;
  summaryformat: number;
  attachment: string;
  publishstate: string;
  lastmodified: number;
  created: number;
  usermodified: number;
}

export interface mdl_profiling {
  id: number;
  runid: string;
  url: string;
  data: string;
  totalexecutiontime: number;
  totalcputime: number;
  totalcalls: number;
  totalmemory: number;
  runreference: number;
  runcomment: string;
  timecreated: number;
}

export interface mdl_qtype_essay_options {
  id: number;
  questionid: number;
  responseformat: string;
  responsefieldlines: number;
  attachments: number;
  graderinfo: string;
  graderinfoformat: number;
  responsetemplate: string;
  responsetemplateformat: number;
}

export interface mdl_qtype_match_options {
  id: number;
  questionid: number;
  shuffleanswers: number;
  correctfeedback: string;
  correctfeedbackformat: number;
  partiallycorrectfeedback: string;
  partiallycorrectfeedbackformat: number;
  incorrectfeedback: string;
  incorrectfeedbackformat: number;
  shownumcorrect: number;
}

export interface mdl_qtype_match_subquestions {
  id: number;
  questionid: number;
  questionstring: string;
  questionstringformat: number;
  answerstring: string;
}

export interface mdl_qtype_shortanswer_options {
  id: number;
  questionid: number;
  usecase: number;
}

export interface mdl_question {
  id: number;
  category: number;
  parent: number;
  name: string;
  questionstring: string;
  questionstringformat: number;
  generalfeedback: string;
  generalfeedbackformat: number;
  defaultmark: number;
  penalty: number;
  qtype: string;
  length: number;
  stamp: string;
  version: string;
  hidden: number;
  timecreated: number;
  timemodified: number;
  createdby: number;
  modifiedby: number;
}

export interface mdl_question_answers {
  id: number;
  question: number;
  answer: string;
  answerformat: number;
  fraction: number;
  feedback: string;
  feedbackformat: number;
}

export interface mdl_question_attempts {
  id: number;
  questionusageid: number;
  slot: number;
  behaviour: string;
  questionid: number;
  variant: number;
  maxmark: number;
  minfraction: number;
  flagged: number;
  questionsummary: string;
  rightanswer: string;
  responsesummary: string;
  timemodified: number;
}

export interface mdl_question_attempt_steps {
  id: number;
  questionattemptid: number;
  sequencenumber: number;
  state: string;
  fraction: number;
  timecreated: number;
  userid: number;
}

export interface mdl_question_attempt_step_data {
  id: number;
  attemptstepid: number;
  name: string;
  value: string;
}

export interface mdl_question_calculated {
  id: number;
  question: number;
  answer: number;
  tolerance: string;
  tolerancetype: number;
  correctanswerlength: number;
  correctanswerformat: number;
}

export interface mdl_question_calculated_options {
  id: number;
  question: number;
  synchronize: number;
  single: number;
  shuffleanswers: number;
  correctfeedback: string;
  correctfeedbackformat: number;
  partiallycorrectfeedback: string;
  partiallycorrectfeedbackformat: number;
  incorrectfeedback: string;
  incorrectfeedbackformat: number;
  answernumbering: string;
  shownumcorrect: number;
}

export interface mdl_question_categories {
  id: number;
  name: string;
  constringid: number;
  info: string;
  infoformat: number;
  stamp: string;
  parent: number;
  sortorder: number;
}

export interface mdl_question_datasets {
  id: number;
  question: number;
  datasetdefinition: number;
}

export interface mdl_question_dataset_definitions {
  id: number;
  category: number;
  name: string;
  type: number;
  options: string;
  itemcount: number;
}

export interface mdl_question_dataset_items {
  id: number;
  definition: number;
  itemnumber: number;
  value: string;
}

export interface mdl_question_hints {
  id: number;
  questionid: number;
  hint: string;
  hintformat: number;
  shownumcorrect: number;
  clearwrong: number;
  options: string;
}

export interface mdl_question_multianswer {
  id: number;
  question: number;
  sequence: string;
}

export interface mdl_question_multichoice {
  id: number;
  question: number;
  layout: number;
  answers: string;
  single: number;
  shuffleanswers: number;
  correctfeedback: string;
  correctfeedbackformat: number;
  partiallycorrectfeedback: string;
  partiallycorrectfeedbackformat: number;
  incorrectfeedback: string;
  incorrectfeedbackformat: number;
  answernumbering: string;
  shownumcorrect: number;
}

export interface mdl_question_numerical {
  id: number;
  question: number;
  answer: number;
  tolerance: string;
}

export interface mdl_question_numerical_options {
  id: number;
  question: number;
  showunits: number;
  unitsleft: number;
  unitgradingtype: number;
  unitpenalty: number;
}

export interface mdl_question_numerical_units {
  id: number;
  question: number;
  multiplier: number;
  unit: string;
}

export interface mdl_question_randomsamatch {
  id: number;
  question: number;
  choose: number;
}

export interface mdl_question_sessions {
  id: number;
  attemptid: number;
  questionid: number;
  newest: number;
  newgraded: number;
  sumpenalty: number;
  manualcomment: string;
  manualcommentformat: number;
  flagged: number;
}

export interface mdl_question_states {
  id: number;
  attempt: number;
  question: number;
  seq_number: number;
  answer: string;
  timestamp: number;
  event: number;
  grade: number;
  raw_grade: number;
  penalty: number;
}

export interface mdl_question_truefalse {
  id: number;
  question: number;
  trueanswer: number;
  falseanswer: number;
}

export interface mdl_question_usages {
  id: number;
  constringid: number;
  component: string;
  preferredbehaviour: string;
}

export interface mdl_quiz {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  timeopen: number;
  timeclose: number;
  preferredbehaviour: string;
  attempts: number;
  attemptonlast: number;
  grademethod: number;
  numberpoints: number;
  questionnumberpoints: number;
  reviewattempt: number;
  reviewcorrectness: number;
  reviewmarks: number;
  reviewspecificfeedback: number;
  reviewgeneralfeedback: number;
  reviewrightanswer: number;
  reviewoverallfeedback: number;
  questionsperpage: number;
  shufflequestions: number;
  shuffleanswers: number;
  questions: string;
  sumgrades: number;
  grade: number;
  timecreated: number;
  timemodified: number;
  timelimit: number;
  overduehandling: string;
  graceperiod: number;
  password: string;
  subnet: string;
  browsersecurity: string;
  delay1: number;
  delay2: number;
  showuserpicture: number;
  showblocks: number;
  navmethod: string;
}

export interface mdl_quiz_attempts {
  id: number;
  uniqueid: number;
  quiz: number;
  userid: number;
  attempt: number;
  sumgrades: number;
  timestart: number;
  timefinish: number;
  timemodified: number;
  timecheckstate: number;
  layout: string;
  preview: number;
  state: string;
  needsupgradetonewqe: number;
  currentpage: number;
}

export interface mdl_quiz_feedback {
  id: number;
  quizid: number;
  feedbackstring: string;
  feedbackstringformat: number;
  mingrade: number;
  maxgrade: number;
}

export interface mdl_quiz_grades {
  id: number;
  quiz: number;
  userid: number;
  grade: number;
  timemodified: number;
}

export interface mdl_quiz_overrides {
  id: number;
  quiz: number;
  groupid: number;
  userid: number;
  timeopen: number;
  timeclose: number;
  timelimit: number;
  attempts: number;
  password: string;
}

export interface mdl_quiz_overview_regrades {
  id: number;
  questionusageid: number;
  slot: number;
  newfraction: number;
  oldfraction: number;
  regraded: number;
  timemodified: number;
}

export interface mdl_quiz_question_instances {
  id: number;
  quiz: number;
  question: number;
  grade: number;
}

export interface mdl_quiz_question_response_stats {
  id: number;
  quizstatisticsid: number;
  questionid: number;
  subqid: string;
  aid: string;
  response: string;
  rcount: number;
  credit: number;
}

export interface mdl_quiz_question_statistics {
  id: number;
  quizstatisticsid: number;
  questionid: number;
  slot: number;
  subquestion: number;
  s: number;
  effectiveweight: number;
  negcovar: number;
  discriminationindex: number;
  discriminativeefficiency: number;
  sd: number;
  facility: number;
  subquestions: string;
  maxmark: number;
  positions: string;
  randomguessscore: number;
}

export interface mdl_quiz_reports {
  id: number;
  name: string;
  displayorder: number;
  capability: string;
}

export interface mdl_quiz_statistics {
  id: number;
  quizid: number;
  groupid: number;
  allattempts: number;
  timemodified: number;
  firstattemptscount: number;
  allattemptscount: number;
  firstattemptsavg: number;
  allattemptsavg: number;
  median: number;
  standarddeviation: number;
  skewness: number;
  kurtosis: number;
  cic: number;
  errorratio: number;
  standarderror: number;
}

export interface mdl_rating {
  id: number;
  constringid: number;
  component: string;
  ratingarea: string;
  itemid: number;
  scaleid: number;
  rating: number;
  userid: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_registration_hubs {
  id: number;
  token: string;
  hubname: string;
  huburl: string;
  confirmed: number;
  secret: string;
}

export interface mdl_repository {
  id: number;
  type: string;
  visible: number;
  sortorder: number;
}

export interface mdl_repository_instances {
  id: number;
  name: string;
  typeid: number;
  userid: number;
  constringid: number;
  username: string;
  password: string;
  timecreated: number;
  timemodified: number;
  readonly: number;
}

export interface mdl_repository_instance_config {
  id: number;
  instanceid: number;
  name: string;
  value: string;
}

export interface mdl_resource {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  tobemigrated: number;
  legacyfiles: number;
  legacyfileslast: number;
  display: number;
  displayoptions: string;
  filterfiles: number;
  revision: number;
  timemodified: number;
}

export interface mdl_resource_old {
  id: number;
  course: number;
  name: string;
  type: string;
  reference: string;
  intro: string;
  introformat: number;
  allstring: string;
  popup: string;
  options: string;
  timemodified: number;
  oldid: number;
  cmid: number;
  newmodule: string;
  newid: number;
  migrated: number;
}

export interface mdl_role {
  id: number;
  name: string;
  shortname: string;
  description: string;
  sortorder: number;
  archetype: string;
}

export interface mdl_role_allow_assign {
  id: number;
  roleid: number;
  allowassign: number;
}

export interface mdl_role_allow_override {
  id: number;
  roleid: number;
  allowoverride: number;
}

export interface mdl_role_allow_switch {
  id: number;
  roleid: number;
  allowswitch: number;
}

export interface mdl_role_assignments {
  id: number;
  roleid: number;
  constringid: number;
  userid: number;
  timemodified: number;
  modifierid: number;
  component: string;
  itemid: number;
  sortorder: number;
}

export interface mdl_role_capabilities {
  id: number;
  constringid: number;
  roleid: number;
  capability: string;
  permission: number;
  timemodified: number;
  modifierid: number;
}

export interface mdl_role_constring_levels {
  id: number;
  roleid: number;
  constringlevel: number;
}

export interface mdl_role_names {
  id: number;
  roleid: number;
  constringid: number;
  name: string;
}

export interface mdl_role_sortorder {
  id: number;
  userid: number;
  roleid: number;
  constringid: number;
  sortoder: number;
}

export interface mdl_scale {
  id: number;
  courseid: number;
  userid: number;
  name: string;
  scale: string;
  description: string;
  descriptionformat: number;
  timemodified: number;
}

export interface mdl_scale_history {
  id: number;
  action: number;
  oldid: number;
  source: string;
  timemodified: number;
  loggeduser: number;
  courseid: number;
  userid: number;
  name: string;
  scale: string;
  description: string;
}

export interface mdl_scorm {
  id: number;
  course: number;
  name: string;
  scormtype: string;
  reference: string;
  intro: string;
  introformat: number;
  version: string;
  maxgrade: number;
  grademethod: number;
  whatgrade: number;
  maxattempt: number;
  forcecompleted: number;
  forcenewattempt: number;
  lastattemptlock: number;
  displayattemptstatus: number;
  displaycoursestructure: number;
  updatefreq: number;
  sha1hash: string;
  md5hash: string;
  revision: number;
  launch: number;
  skipview: number;
  hidebrowse: number;
  hidetoc: number;
  hidenav: number;
  auto: number;
  popup: number;
  options: string;
  width: number;
  height: number;
  timeopen: number;
  timeclose: number;
  timemodified: number;
  completionstatusrequired: number;
  completionscorerequired: number;
}

export interface mdl_scorm_aicc_session {
  id: number;
  userid: number;
  scormid: number;
  hacpsession: string;
  scoid: number;
  scormmode: string;
  scormstatus: string;
  attempt: number;
  lessonstatus: string;
  sessiontime: string;
  timecreated: number;
  timemodified: number;
}

export interface mdl_scorm_scoes {
  id: number;
  scorm: number;
  manifest: string;
  organization: string;
  parent: string;
  identifier: string;
  launch: string;
  scormtype: string;
  title: string;
}

export interface mdl_scorm_scoes_data {
  id: number;
  scoid: number;
  name: string;
  value: string;
}

export interface mdl_scorm_scoes_track {
  id: number;
  userid: number;
  scormid: number;
  scoid: number;
  attempt: number;
  element: string;
  value: string;
  timemodified: number;
}

export interface mdl_scorm_seq_mapinfo {
  id: number;
  scoid: number;
  objectiveid: number;
  targetobjectiveid: number;
  readsatisfiedstatus: number;
  readnormalizedmeasure: number;
  writesatisfiedstatus: number;
  writenormalizedmeasure: number;
}

export interface mdl_scorm_seq_objective {
  id: number;
  scoid: number;
  primaryobj: number;
  objectiveid: string;
  satisfiedbymeasure: number;
  minnormalizedmeasure: number;
}

export interface mdl_scorm_seq_rolluprule {
  id: number;
  scoid: number;
  childactivityset: string;
  minimumcount: number;
  minimumpercent: number;
  conditioncombination: string;
  action: string;
}

export interface mdl_scorm_seq_rolluprulecond {
  id: number;
  scoid: number;
  rollupruleid: number;
  operator: string;
  cond: string;
}

export interface mdl_scorm_seq_rulecond {
  id: number;
  scoid: number;
  ruleconditionsid: number;
  refrencedobjective: string;
  measurethreshold: number;
  operator: string;
  cond: string;
}

export interface mdl_scorm_seq_ruleconds {
  id: number;
  scoid: number;
  conditioncombination: string;
  ruletype: number;
  action: string;
}

export interface mdl_sessions {
  id: number;
  state: number;
  sid: string;
  userid: number;
  sessdata: string;
  timecreated: number;
  timemodified: number;
  firstip: string;
  lastip: string;
}

export interface mdl_stats_daily {
  id: number;
  courseid: number;
  timeend: number;
  roleid: number;
  stattype: string;
  stat1: number;
  stat2: number;
}

export interface mdl_stats_monthly {
  id: number;
  courseid: number;
  timeend: number;
  roleid: number;
  stattype: string;
  stat1: number;
  stat2: number;
}

export interface mdl_stats_user_daily {
  id: number;
  courseid: number;
  userid: number;
  roleid: number;
  timeend: number;
  statsreads: number;
  statswrites: number;
  stattype: string;
}

export interface mdl_stats_user_monthly {
  id: number;
  courseid: number;
  userid: number;
  roleid: number;
  timeend: number;
  statsreads: number;
  statswrites: number;
  stattype: string;
}

export interface mdl_stats_user_weekly {
  id: number;
  courseid: number;
  userid: number;
  roleid: number;
  timeend: number;
  statsreads: number;
  statswrites: number;
  stattype: string;
}

export interface mdl_stats_weekly {
  id: number;
  courseid: number;
  timeend: number;
  roleid: number;
  stattype: string;
  stat1: number;
  stat2: number;
}

export interface mdl_survey {
  id: number;
  course: number;
  template: number;
  days: number;
  timecreated: number;
  timemodified: number;
  name: string;
  intro: string;
  introformat: number;
  questions: string;
}

export interface mdl_survey_analysis {
  id: number;
  survey: number;
  userid: number;
  notes: string;
}

export interface mdl_survey_answers {
  id: number;
  userid: number;
  survey: number;
  question: number;
  time: number;
  answer1: string;
  answer2: string;
}

export interface mdl_survey_questions {
  id: number;
  string: string;
  shortstring: string;
  multi: string;
  intro: string;
  type: number;
  options: string;
}

export interface mdl_tag {
  id: number;
  userid: number;
  name: string;
  rawname: string;
  tagtype: string;
  description: string;
  descriptionformat: number;
  flag: number;
  timemodified: number;
}

export interface mdl_tag_correlation {
  id: number;
  tagid: number;
  correlatedtags: string;
}

export interface mdl_tag_instance {
  id: number;
  tagid: number;
  itemtype: string;
  itemid: number;
  tiuserid: number;
  ordering: number;
  timemodified: number;
}

export interface mdl_temp_enroled_template {
  id: number;
  userid: number;
  courseid: number;
  roleid: number;
}

export interface mdl_temp_log_template {
  id: number;
  userid: number;
  course: number;
  action: string;
}

export interface mdl_timezone {
  id: number;
  name: string;
  year: number;
  tzrule: string;
  gmtoff: number;
  dstoff: number;
  dst_month: number;
  dst_startday: number;
  dst_weekday: number;
  dst_skipweeks: number;
  dst_time: string;
  std_month: number;
  std_startday: number;
  std_weekday: number;
  std_skipweeks: number;
  std_time: string;
}

export interface mdl_tool_customlang {
  id: number;
  lang: string;
  componentid: number;
  stringid: string;
  original: string;
  master: string;
  local: string;
  timemodified: number;
  timecustomized: number;
  outdated: number;
  modified: number;
}

export interface mdl_tool_customlang_components {
  id: number;
  name: string;
  version: string;
}

export interface mdl_upgrade_log {
  id: number;
  type: number;
  plugin: string;
  version: string;
  targetversion: string;
  info: string;
  details: string;
  backtrace: string;
  userid: number;
  timemodified: number;
}

export interface mdl_url {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  externalurl: string;
  display: number;
  displayoptions: string;
  parameters: string;
  timemodified: number;
}

export interface mdl_user {
  id: number;
  auth: string;
  confirmed: number;
  policyagreed: number;
  deleted: number;
  suspended: number;
  mnethostid: number;
  username: string;
  password: string;
  idnumber: string;
  firstname: string;
  lastname: string;
  email: string;
  emailstop: number;
  icq: string;
  skype: string;
  yahoo: string;
  aim: string;
  msn: string;
  phone1: string;
  phone2: string;
  institution: string;
  department: string;
  address: string;
  city: string;
  country: string;
  lang: string;
  theme: string;
  timezone: string;
  firstaccess: number;
  lastaccess: number;
  lastlogin: number;
  currentlogin: number;
  lastip: string;
  secret: string;
  picture: number;
  url: string;
  description: string;
  descriptionformat: number;
  mailformat: number;
  maildigest: number;
  maildisplay: number;
  htmleditor: number;
  autosubscribe: number;
  trackforums: number;
  timecreated: number;
  timemodified: number;
  trustbitmask: number;
  imagealt: string;
}

export interface mdl_user_enrolments {
  id: number;
  status: number;
  enrolid: number;
  userid: number;
  timestart: number;
  timeend: number;
  modifierid: number;
  timecreated: number;
  timemodified: number;
}

export interface mdl_user_info_category {
  id: number;
  name: string;
  sortorder: number;
}

export interface mdl_user_info_data {
  id: number;
  userid: number;
  fieldid: number;
  data: string;
  dataformat: number;
}

export interface mdl_user_info_field {
  id: number;
  shortname: string;
  name: string;
  datatype: string;
  description: string;
  descriptionformat: number;
  categoryid: number;
  sortorder: number;
  required: number;
  locked: number;
  visible: number;
  force: number;
  signup: number;
  defaultdata: string;
  defaultdataformat: number;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
  param5: string;
}

export interface mdl_user_lastaccess {
  id: number;
  userid: number;
  courseid: number;
  timeaccess: number;
}

export interface mdl_user_preferences {
  id: number;
  userid: number;
  name: string;
  value: string;
}

export interface mdl_user_private_key {
  id: number;
  script: string;
  value: string;
  userid: number;
  instance: number;
  iprestriction: string;
  validuntil: number;
  timecreated: number;
}

export interface mdl_webdav_locks {
  id: number;
  token: string;
  path: string;
  expiry: number;
  userid: number;
  recursive: number;
  exclusivelock: number;
  created: number;
  modified: number;
  owner: string;
}

export interface mdl_wiki {
  id: number;
  course: number;
  name: string;
  timemodified: number;
  intro: string;
  introformat: number;
  timecreated: number;
  firstpagetitle: string;
  wikimode: string;
  defaultformat: string;
  forceformat: number;
  editbegin: number;
  editend: number;
}

export interface mdl_wiki_links {
  id: number;
  subwikiid: number;
  frompageid: number;
  topageid: number;
  tomissingpage: string;
}

export interface mdl_wiki_locks {
  id: number;
  pageid: number;
  sectionname: string;
  userid: number;
  lockedat: number;
}

export interface mdl_wiki_pages {
  id: number;
  subwikiid: number;
  title: string;
  cachedcontent: string;
  timecreated: number;
  timemodified: number;
  timerendered: number;
  userid: number;
  pageviews: number;
  readonly: number;
}

export interface mdl_wiki_subwikis {
  id: number;
  wikiid: number;
  groupid: number;
  userid: number;
}

export interface mdl_wiki_synonyms {
  id: number;
  subwikiid: number;
  pageid: number;
  pagesynonym: string;
}

export interface mdl_wiki_versions {
  id: number;
  pageid: number;
  content: string;
  contentformat: string;
  version: number;
  timecreated: number;
  userid: number;
}

export interface mdl_workshop {
  id: number;
  course: number;
  name: string;
  intro: string;
  introformat: number;
  instructauthors: string;
  instructauthorsformat: number;
  instructreviewers: string;
  instructreviewersformat: number;
  timemodified: number;
  phase: number;
  useexamples: number;
  usepeerassessment: number;
  useselfassessment: number;
  grade: number;
  gradinggrade: number;
  strategy: string;
  evaluation: string;
  gradenumbers: number;
  nattachments: number;
  latesubmissions: number;
  maxbytes: number;
  examplesmode: number;
  submissionstart: number;
  submissionend: number;
  assessmentstart: number;
  assessmentend: number;
  phaseswitchassessment: number;
  conclusion: string;
  conclusionformat: number;
  overallfeedbackmode: number;
  overallfeedbackfiles: number;
  overallfeedbackmaxbytes: number;
}

export interface mdl_workshopallocation_scheduled {
  id: number;
  workshopid: number;
  enabled: number;
  submissionend: number;
  timeallocated: number;
  settings: string;
  resultstatus: number;
  resultmessage: string;
  resultlog: string;
}

export interface mdl_workshopeval_best_settings {
  id: number;
  workshopid: number;
  comparison: number;
}

export interface mdl_workshopform_accumulative {
  id: number;
  workshopid: number;
  sort: number;
  description: string;
  descriptionformat: number;
  grade: number;
  weight: number;
}

export interface mdl_workshopform_comments {
  id: number;
  workshopid: number;
  sort: number;
  description: string;
  descriptionformat: number;
}

export interface mdl_workshopform_numerrors {
  id: number;
  workshopid: number;
  sort: number;
  description: string;
  descriptionformat: number;
  descriptiontrust: number;
  grade0: string;
  grade1: string;
  weight: number;
}

export interface mdl_workshopform_numerrors_map {
  id: number;
  workshopid: number;
  nonegative: number;
  grade: number;
}

export interface mdl_workshopform_rubric {
  id: number;
  workshopid: number;
  sort: number;
  description: string;
  descriptionformat: number;
}

export interface mdl_workshopform_rubric_config {
  id: number;
  workshopid: number;
  layout: string;
}

export interface mdl_workshopform_rubric_levels {
  id: number;
  dimensionid: number;
  grade: number;
  definition: string;
  definitionformat: number;
}

export interface mdl_workshop_aggregations {
  id: number;
  workshopid: number;
  userid: number;
  gradinggrade: number;
  timegraded: number;
}

export interface mdl_workshop_assessments {
  id: number;
  submissionid: number;
  reviewerid: number;
  weight: number;
  timecreated: number;
  timemodified: number;
  grade: number;
  gradinggrade: number;
  gradinggradeover: number;
  gradinggradeoverby: number;
  feedbackauthor: string;
  feedbackauthorformat: number;
  feedbackauthorattachment: number;
  feedbackreviewer: string;
  feedbackreviewerformat: number;
}

export interface mdl_workshop_assessments_old {
  id: number;
  workshopid: number;
  submissionid: number;
  userid: number;
  timecreated: number;
  timegraded: number;
  timeagreed: number;
  grade: number;
  gradinggrade: number;
  teachergraded: number;
  mailed: number;
  resubmission: number;
  donotuse: number;
  generalcomment: string;
  teachercomment: string;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_comments_old {
  id: number;
  workshopid: number;
  assessmentid: number;
  userid: number;
  timecreated: number;
  mailed: number;
  comments: string;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_elements_old {
  id: number;
  workshopid: number;
  elementno: number;
  description: string;
  scale: number;
  maxscore: number;
  weight: number;
  stddev: number;
  totalassessments: number;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_grades {
  id: number;
  assessmentid: number;
  strategy: string;
  dimensionid: number;
  grade: number;
  peercomment: string;
  peercommentformat: number;
}

export interface mdl_workshop_grades_old {
  id: number;
  workshopid: number;
  assessmentid: number;
  elementno: number;
  feedback: string;
  grade: number;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_old {
  id: number;
  course: number;
  name: string;
  description: string;
  wtype: number;
  nelements: number;
  nattachments: number;
  phase: number;
  format: number;
  gradingstrategy: number;
  resubmit: number;
  agreeassessments: number;
  hidegrades: number;
  anonymous: number;
  includeself: number;
  maxbytes: number;
  submissionstart: number;
  assessmentstart: number;
  submissionend: number;
  assessmentend: number;
  releasegrades: number;
  grade: number;
  gradinggrade: number;
  ntassessments: number;
  assessmentcomps: number;
  nsassessments: number;
  overallocation: number;
  timemodified: number;
  teacherweight: number;
  showleaguetable: number;
  usepassword: number;
  password: string;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_rubrics_old {
  id: number;
  workshopid: number;
  elementno: number;
  rubricno: number;
  description: string;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_stockcomments_old {
  id: number;
  workshopid: number;
  elementno: number;
  comments: string;
  newplugin: string;
  newid: number;
}

export interface mdl_workshop_submissions {
  id: number;
  workshopid: number;
  example: number;
  authorid: number;
  timecreated: number;
  timemodified: number;
  title: string;
  content: string;
  contentformat: number;
  contenttrust: number;
  attachment: number;
  grade: number;
  gradeover: number;
  gradeoverby: number;
  feedbackauthor: string;
  feedbackauthorformat: number;
  timegraded: number;
  published: number;
  late: number;
}

export interface mdl_workshop_submissions_old {
  id: number;
  workshopid: number;
  userid: number;
  title: string;
  timecreated: number;
  mailed: number;
  description: string;
  gradinggrade: number;
  finalgrade: number;
  late: number;
  nassessments: number;
  newplugin: string;
  newid: number;
}
