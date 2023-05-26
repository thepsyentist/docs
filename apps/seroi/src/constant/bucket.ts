import { Attribute } from '@docs/ui/src/types/list.type';

export const SVCBucketAttributes: Attribute[] = [
  {
    name: 'id',
    required: false,
    type: 'string',
    description: '고유 ID 값 입니다. \n생성할 때는 필요하지 않습니다.',
  },
  {
    name: 'svcId',
    required: false,
    type: 'string',
    description: '생성할 때 ID 값을 지정 할 수 있습니다.',
  },
  {
    name: 'type',
    required: false,
    type: 'string',
    description: '도메인의 분류 값 입니다. \n"PRODUCT" "ORDER" 같은 도메인 값으로 활용 됩니다.',
  },
  {
    name: 'name',
    required: false,
    type: 'string',
    description: '제목 입니다. \n상품 도메인의 제목의 경우, "신선식품" 같은 값으로 활용 됩니다.',
  },
  {
    name: 'orgCode',
    required: false,
    type: 'string',
    description: 'User의 orgCode(Organization Code)를 지정 할 수 있습니다. \n해당 데이터는 orgCode에 해당되는 유저만 조회 할 수 있습니다.',
  },
  {
    name: 'deleted',
    required: false,
    type: 'boolean',
    description: '데이터의 영구삭제를 결정합니다. \n영구삭제 되지 않은 데이터는 데이터베이스에 보존 됩니다. \n· 삭제: true \n· 삭제안함: false',
  },
  {
    name: 'published',
    required: false,
    type: 'boolean',
    description: '데이터의 공개여부를 결정합니다. \n비공개 데이터는 해당 유저만 조회 할 수 있습니다. \n· 공개: true(default) \n· 비공개: false',
    link: '/M5/core/published',
  },
  {
    name: 'files',
    required: false,
    type: 'File',
    description: '필요한 파일들을 저장합니다.',
    link: '/M5/core/files',
  },
  {
    name: 'permissions',
    required: false,
    type: 'object',
    description: '권한을 설정합니다. \n리스트 조회, 읽기, 쓰기 권한을 설정 할 수 있습니다.',
    link: '/M5/core/permissions',
  },
  {
    name: 'updated',
    required: false,
    type: 'number(Unix Timestamp)',
    description: '업데이트 반영된 시간 입니다.',
  },
  {
    name: 'created',
    required: false,
    type: 'number(Unix Timestamp)',
    description: '생성된 시간 입니다.',
  },
  {
    name: 'userData',
    required: false,
    type: 'unkown',
    description:
      '원하는 형식의 데이터를 저장할 수 있습니다. \n위 Property에서 표현할 수 없는 데이터를 저장할 수 있습니다. \n주로 데이터의 세부 내용을 저장하게 되며, 사전에 반드시 데이터 설계가 필요합니다.',
  },
];
