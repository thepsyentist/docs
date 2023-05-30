import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from './attributes';

const SVCBucketAttributes: Attribute[] = [
  { ...attributes.type, description: '도메인의 분류 값 입니다. \n"PRODUCT" "ORDER" 같은 도메인 값으로 활용 됩니다.' },
  attributes.id,
  attributes.svcId,
  { name: 'name', required: false, type: 'string', description: '제목 입니다. \n상품 도메인의 제목의 경우, "신선식품" 같은 값으로 활용 됩니다.' },
  attributes.docOrgCode,
  attributes.mode,
  attributes.deleted,
  attributes.published,
  attributes.files,
  attributes.permissions,
  attributes.updated,
  attributes.created,
  attributes.userData,
];

export default SVCBucketAttributes;
