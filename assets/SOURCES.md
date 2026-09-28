# 박주성 포트폴리오 · 자료와 라이선스

## 대표 화면

단디계약과 WakeBook의 대표 화면·설명은 포트폴리오 작성자가 제공한 자료입니다. 팀 결과물과 개인의 담당 업무를 구분해 소개합니다.

- `images/dandi-contract.png`: 단디계약 서비스 대표 화면.
- `images/wakebook.png`: WakeBook 서비스 대표 화면.
- 단디계약 GitHub: https://github.com/fkal829/AI-Builder-Sprint_AIdios
- WakeBook GitHub: https://github.com/parkjooseong/wakebook

## 글꼴과 라이브러리

- Noto Sans KR: https://github.com/google/fonts/tree/main/ofl/notosanskr · SIL OFL 1.1 · `fonts/notosanskr-OFL.txt`.
- Noto Serif KR: https://github.com/google/fonts/tree/main/ofl/notoserifkr · SIL OFL 1.1 · `fonts/notoserifkr-OFL.txt`. 가변 WOFF2를 문자 범위별로 분할했으며 원본의 문자와 굵기 범위를 유지했습니다.
- GSAP 3.13.0 / ScrollTrigger: https://gsap.com/ · `vendor/GSAP-LICENSE.txt`.
- favicon.svg: 포트폴리오용 표식.

## 개발 노트의 코드 근거

단디계약 `34d6ca4`, WakeBook `e876900` 시점의 공개 코드와 회귀 테스트를 읽고 개발 노트를 구체화했습니다. 노트 안에서 해당 커밋의 구현과 테스트로 연결합니다.

- 단디계약: 동일·동시 요청의 중복 실행 방지, 요청 내용 충돌 처리, 상태 변경과 감사 이력의 트랜잭션 저장.
- WakeBook: CSV가 없는 도서관의 API 후보 수집, 기존 CSV 후보 보호, 상세 조회 후 ISBN 중복 제거, 빈 후보 결과에서 기존 목록 유지.
- 테스트 설명은 저장소의 테스트 코드가 확인하는 조건입니다. 이번 문구 수정에서 프로젝트 백엔드나 실제 외부 API를 재실행했다는 뜻은 아닙니다. 전체 팀의 구현을 개인의 단독 성과나 측정되지 않은 성능 개선으로 표현하지 않았습니다.
