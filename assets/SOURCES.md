# 박주성 포트폴리오 · 자료와 라이선스

## 대표 화면

단디계약과 WakeBook의 대표 화면·설명은 포트폴리오 작성자가 제공한 자료입니다. 팀 결과물과 개인의 담당 업무를 구분해 소개합니다.

- `images/dandi-contract.png`: 단디계약 서비스 대표 화면.
- `images/wakebook.png`: WakeBook 서비스 대표 화면.
- 단디계약 GitHub: https://github.com/fkal829/AI-Builder-Sprint_AIdios
- WakeBook GitHub: https://github.com/parkjooseong/wakebook

## 글꼴과 라이브러리

- `fonts/SUIT-Variable.woff2`: 한글 제목·본문용 SUIT 2 가변 웹폰트. [공식 배포](https://github.com/sun-typeface/SUIT), 원본 커밋 `55118d981336d8fce005eb62888c12c0568ef7b0`. 수정하지 않은 WOFF2를 로컬에 포함. SIL OFL 1.1, `fonts/suit-OFL.txt`.
- Noto Serif KR: https://github.com/google/fonts/tree/main/ofl/notoserifkr · SIL OFL 1.1 · `fonts/notoserifkr-OFL.txt`. 가변 WOFF2를 문자 범위별로 분할했으며 원본의 문자와 굵기 범위를 유지했습니다.
- GSAP 3.13.0 / ScrollTrigger: https://gsap.com/ · `vendor/GSAP-LICENSE.txt`.
- favicon.svg: 포트폴리오용 표식.

## 개발 노트의 기여·협업 근거

팀 코드의 구현 여부와 개인 기여를 구분하기 위해 커밋·PR 작성자를 함께 확인했습니다.

- 단디계약: `parkjooseong`의 [PR #45](https://github.com/fkal829/AI-Builder-Sprint_AIdios/pull/45). 저장된 응답을 읽는 역제안 비교 서비스, 조정 상세 조회 연결, 스키마·공유 명세 변경, AI 비교 실패 시 원본 응답 보존 테스트가 포함됩니다.
- WakeBook: `parkjooseong`의 [daa8ec1 커밋](https://github.com/parkjooseong/wakebook/commit/daa8ec1027d14b1c0336aee6ab14feeacc8c161b). 도서관 조건 필터 이후 차순위 후보 보충과 표시 순서 검증 테스트를 추가했습니다.
- WakeBook 협업: 본인의 회원·책장 PR #2·3·6·10·11·12와, 팀원이 작성한 [화면 연동 PR #16](https://github.com/2026-PNU-AI-StudyGroup/2026-pnuai-studygroup-03/pull/16)을 구분했습니다. 원래 팀 저장소의 PR 기록을 참고했습니다.
- 코드 기준: 단디계약 `34d6ca4`, WakeBook `e876900`. 참고한 회귀 테스트의 검증 조건을 근거로 삼았으며, 이번 포트폴리오 수정에서 프로젝트 백엔드나 실외부 API를 재실행한 결과로 표현하지 않았습니다.
- 협업 과정은 API·데이터 경계와 기능 통합 기록에 근거합니다. 기록에 없는 회의, 갈등, 제안 주도권이나 개선 수치는 추가하지 않았습니다.

개발 노트는 사용자 요청에 따라 짧은 제목과 문제·해결 두 항목으로 정리했습니다. 노트 본문의 PR·커밋·테스트 링크와 별도 검증 설명은 제거했으며, 내용 근거는 이 출처 기록과 로컬 작업 문서에 보관합니다.

## 한글 타이포그래피 조정

한글 제목·본문은 SUIT로 통일하고 영문 큰 제목과 번호에는 Noto Serif KR을 사용합니다. 큰 한글 제목은 600 굵기와 -0.025em 자간, 소개·작품 설명은 1.6 행간으로 조정했습니다. SUIT 원본 폰트와 라이선스를 함께 포함해 외부 폰트 서버 없이 표시합니다.
