import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCDocAttributes: Attribute[] = [
  { ...attributes.type, required: true, description: '분류 값 입니다. \n도메인의 세부사항을 분류할때 활용됩니다. \nDoc을 fetch 요청시 type 값으로 filter하여 조회할 수 있습니다.' },
  { ...attributes.published, required: true },
  {
    name: 'title',
    required: true,
    type: 'string',
    description: '제목 값 입니다. \nDoc 데이터의 명칭으로 활용됩니다.',
  },
  {
    name: 'subtitle',
    required: false,
    type: 'string',
    description: 'title에서 또 다른 명칭이 필요할때 활용됩니다.',
  },
  attributes.key,
  attributes.id,
  { ...attributes.bucketId, description: 'Doc의 Bucket ID입니다.\n fetch 요청 시 BucketId를 활용하여 해당 Bucket에 속한 Doc만 조회할 수 있습니다.' },
  {
    ...attributes.parentId,
    description:
      'Doc의 부모가 되는 고유값입니다. \nDoc의 데이터 구조에서 부모로는 Bucket, Doc이 될 수 있습니다. \nfetch 요청시에는 { fetchParents: true } 옵션을 사용하여 부모의 정보도 함께 조회할 수 있습니다.',
  },
  attributes.user,
  attributes.userId,
  attributes.code,
  attributes.docOrgCode,
  attributes.subtype,
  attributes.status,
  attributes.substatus,
  attributes.content,
  attributes.files,
  attributes.dates,
  attributes.created,
  attributes.updated,
  attributes.deleted,
  attributes.userData,
];

export default SVCDocAttributes;
