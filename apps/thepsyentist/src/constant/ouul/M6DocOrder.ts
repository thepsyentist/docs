import { Attribute } from '@docs/ui/src/types/list.type';
import DocCommonAttributes from './DocCommonAttributes';


const M6DocOrder: Attribute[] = [
  DocCommonAttributes.svcId,
  DocCommonAttributes.id,
  { ...DocCommonAttributes.type, description: '결제 이전일 땐 [ORDER.NOTPAID], 결제 이후엔 [ORDER] 값을 갖습니다' },
  { ...DocCommonAttributes.subtype, description: 'PHOTOCARD : 포토카드 주문' },
  { ...DocCommonAttributes.status, description: 'PAID\n· ACCEPTED\n· DELIVERING\n· DELIVERED' },
  { ...DocCommonAttributes.substatus, description: '· CANCELED:\n· REFUNDED\n· RETURN-ASKED\n· RETURN-ACCEPTED\n· RETURN-COMPLETED' },
  { ...DocCommonAttributes.parentId, description: '주문할때 사용한 펫' },
  { ...DocCommonAttributes.linkedIds, description: 'PHOTOCARDS, 주문을 요청한 포토카드' },
  { ...DocCommonAttributes.published, description: 'false로 해서 다른 사용자는 못보도록 (본인과 관리자만 가능)' },
  DocCommonAttributes.deleted,
  DocCommonAttributes.files,
  DocCommonAttributes.updated,
  DocCommonAttributes.created,
  DocCommonAttributes.userData,
  DocCommonAttributes.systemData,
];

export default M6DocOrder;
