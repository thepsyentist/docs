const attributes = {

  id: {
    name: 'id',
    required: false,
    type: 'string',
    description: '고유 ID 값 입니다. \n생성할 때는 필요하지 않으며, 업데이트 요청의 경우 필수 값 입니다.',
  },
  bucketId: {
    name: 'bucketId',
    required: false,
    type: 'string',
    description: 'Bucket ID입니다.',
  },
  uniqueKey: {
    name: 'uniqueKey',
    required: false,
    type: 'string',
    description: '고유한 값으로 데이터를 업데이트하거나 생성하는 기준입니다.',
  },
  content: {
    name: 'content',
    required: false,
    type: 'string',
    description: '콘텐츠(내용) 값 입니다.',
  },
  dates: {
    name: 'dates',
    required: false,
    type: 'Object',
    description: '날짜 정보들을 Object 형식으로 저장합니다. \n{ start: number(Unix Timestamp), end: number(Unix Timestamp) } 와 같이 활용할 수 있습니다.',
  },
  docOrgCode: {
    name: 'orgCode',
    required: false,
    type: 'string',
    description: 'User의 orgCode(Organization Code)를 지정 할 수 있습니다. \n해당 데이터는 orgCode에 해당되는 유저만 조회 할 수 있습니다.',
  },
  parentId: {
    name: 'parentId',
    required: false,
    type: 'string',
    description: '부모의 되는 고유값입니다.',
  },
    linkedIds: {
      name: 'linkedIds',
    required: false,
    type: 'string[]',
    description: '링크된 Map<String,Array>',
  },
  svcId: {
    name: 'svcId',
    required: false,
    type: 'string',
    description: '생성할 때 ID 값을 지정 할 수 있습니다.',
  },
  status: {
    name: 'status',
    required: false,
    type: 'string',
    description: '데이터의 상태 값 입니다.',
  },
  substatus: {
    name: 'substatus',
    required: false,
    type: 'string',
    description: 'status에서 또 다른 상태 값이 필요할때 활용됩니다.',
  },
  user: {
    name: 'user',
    required: false,
    type: 'string: SVCUser####',
    description: '유저의 고유 값 입니다. \n 일반적으로는 Doc을 생성한 유저의 ID가 저장됩니다.',
  },
  userId: {
    name: 'userId',
    required: false,
    type: 'string: SVCUser####',
    description: '유저의 고유 값 입니다. \n 일반적으로는 Doc을 생성한 유저의 ID가 저장됩니다.',
  },
  deleted: {
    name: 'deleted',
    required: false,
    type: 'boolean',
    description: '데이터의 영구삭제를 결정합니다. \n영구삭제 되지 않은 데이터는 데이터베이스에 보존 됩니다. \n· 삭제: true \n· 삭제안함: false',
  },
  published: {
    name: 'published',
    required: false,
    type: 'boolean',
    description: '데이터의 공개여부를 결정합니다. \n비공개 데이터는 해당 유저만 조회 할 수 있습니다. \n· 공개: true(default) \n· 비공개: false',
    link: '/M5/core/published',
  },
  files: {
    name: 'files',
    required: false,
    type: 'File',
    description: '필요한 파일들을 저장합니다.',
    link: '/M5/core/files',
  },
  type: {
    name: 'type',
    required: true,
    type: 'string',
    description: '분류 값 입니다.',
  },
  mode: {
    name: 'mode',
    required: false,
    type: 'PRIVATE | PUBLIC',
    description: '',
  },
  subtype: {
    name: 'subtype',
    required: false,
    type: 'string',
    description: 'type에서 또 다른 분류가 필요할때 활용됩니다.',
  },
  permissions: {
    name: 'permissions',
    required: false,
    type: 'object',
    description: '권한을 설정합니다. \n리스트 조회, 읽기, 쓰기 권한을 설정 할 수 있습니다.',
    link: '/M5/core/permissions',
  },
  updated: {
    name: 'updated',
    required: false,
    type: 'number(Unix Timestamp)',
    description: '업데이트 반영된 시간 입니다.',
  },
  created: {
    name: 'created',
    required: false,
    type: 'number(Unix Timestamp)',
    description: '생성된 시간 입니다.',
  },
  userData: {
    name: 'userData',
    required: false,
    type: 'unknown',
    description:
      '원하는 형식의 데이터를 저장할 수 있습니다. \n위 Property에서 표현할 수 없는 데이터를 저장할 수 있습니다. \n주로 데이터의 세부 내용을 저장하게 되며, 사전에 반드시 데이터 설계가 필요합니다.',
  },
  systemData: {
    name: 'systemData',
    required: false,
    type: 'unknown',
    description:
      '시스템에서만 데이터를 저장할 수 있습니다. \n관리자 이외에는 API를 통해 볼 수 없는 데이터입니다.',
  },

} as const;

export default attributes;
