import strings from '@shared/constants/strings';
import LinkButton from '@shared/components/LinkButton';
import { createRoute, joinRoute } from '@shared/constants/routes';

export default function Enter() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center flex-col">
        <h2 className="mb-16">
          {strings.enter.create.TITLE}
        </h2>
        <p className="mb-8 text-lg">
          {strings.enter.create.DESCRIPTION}
        </p>
        <LinkButton size="large" link={createRoute.URL} type="primary">
          {strings.enter.create.ACTION_TEXT}
        </LinkButton>
      </div>
      <div className="border-l border-gray-800 flex-1 flex justify-center items-center flex-col">
        <h2 className="mb-16">
          {strings.enter.join.TITLE}
        </h2>
        <p className="mb-8 text-lg">
          {strings.enter.join.DESCRIPTION}
        </p>
        <LinkButton size="large" link={joinRoute.URL}>
          {strings.enter.join.ACTION_TEXT}
        </LinkButton>
      </div>
    </div>
  );
}
