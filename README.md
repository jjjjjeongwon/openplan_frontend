# 오픈플랜 프론트엔드 과제 - 박정원

## 📌 프로젝트 개요

Turborepo 기반으로 구성되었으며, `web` 앱과 `storybook` 앱, `ui` 패키지를 포함합니다.  
TypeScript, Next.js, React, Zustand, Tanstack Query를 사용하며, ESLint와 Prettier로 코드를 관리 합니다.

**프로젝트 URL**

- GitHub: https://github.com/jjjjjeongwon/openplan_frontend
- Vercel 배포: https://openplan-frontend-web.vercel.app/

## 📌 사용 기술 스택

- 언어: TypeScript
- 프레임워크: Next.js, React
- 상태 관리: Zustand
- 데이터 통신: Tanstack Query
- 스타일링: CSS Module
- 코드 품질 관리: ESLint, Prettier

---

## 📌 실행 / 개발 안내

```bash
# 프로젝트 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# Storybook 실행
pnpm storybook
```

# ✔️ 과제 체크리스트

## 필수 사항

- [x] 터보레포 설치 (패키지 매니저: pnpm)
- [x] 터보레포 워크스페이스 2개 생성: `web`, `storybook`
- [x] web 워크스페이스 작업: 첨부 피그마 기반 구현
- [x] 터보레포 ui 패키지에 버튼 생성
- [x] 생성한 버튼의 스토리북 작성 (상태별)
- [x] 생성한 버튼을 web에 import 후 사용
- [x] CSS 작성(CSS module)
- [x] 사진 조회 전 route: `/`, 사진 조회 후 route: `/result`
- [x] 사진 조회 API: `https://picsum.photos/id/0/info` 사용
- [x] API 통신 후 response를 `/result` 페이지로 전달
- [x] 프로젝트를 Github Public에 업로드
- [x] web 워크스페이스를 Vercel에 배포
- [x] Github url과 배포 Url 메일 회신

## 추가 사항 (선택)

- [x] API 데이터 상태 관리: `tanstack-query` 사용
- [x] 사진 조회 데이터 전역 상태 관리: `Zustand` 사용
- [x] 새로 고침 시에도 데이터 유지
- [x] 사진 조회 버튼 클릭 액션에 스로틀링 적용
- [x] 버튼 스로틀링 시 로딩 애니메이션 표시 (CSS)
- [x] 사진을 한번이라도 조회한 이력이 있을 시 `/result` 페이지 자동 이동 처리
- [x] 사진 조회 페이지 정보 영역 스켈레톤 처리
- [x] 사진 조회 이력 없이 `/result` 접근 시 1초 뒤 메인 페이지로 이동
- [x] 사진 조회 페이지 배경에 조회한 사진 사용
- [x] 404 페이지 생성 및 존재하지 않는 route 접근 시 노출
- [x] README 작성
- [x] ESLint, Prettier를 사용하여 코드 관리
