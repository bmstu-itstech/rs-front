'use client';

import {useIsMobile} from '@/hooks';
import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/shared';
import {useRouter} from 'next/navigation';

function HardathonsScreen() {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <PageLayout title='Хардатон 2024'>
      <div className='flex gap-6 justify-center items-center max-2xl:!my-10'>
        {!isMobile && (
          <img
            className='max-w-[40vw] scale-[1.2] hidden 2xl:block'
            src='/mock/speaker.png'
          />
        )}
        <div className='flex flex-col items-center gap-12 2xl:!-mt-24 md:w-[50dvw]'>
          <div className='flex flex-col  md:gap-10 text-2xl md:text-5xl h-48r max-sm:w-[90vw] max-sm:h-[50vh] bg-linear-to-b from-transparent to-main-orange rounded-6xl border-2 border-main-orange p-12'>
            <p className='text-wrap text-ellipsis h-full overflow-hidden'>
              Examplefffff fffffff ffffffffffffffff fffffff ggg gggggggggg
              gggggggggg gggggggggg eeeeeeeeeeee 2 21212 5423 32 235 2312 12
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              architecto, obcaecati beatae fugiat totam adipisci excepturi harum
              reiciendis necessitatibus ipsum fuga quos id iure dicta fugit quod
              non? Earum consequatur fugit maxime ipsum molestias officiis,
              voluptate quam accusantium, libero illum vitae doloribus ad? Quae
              illo eligendi quod temporibus facere perferendis quisquam ad
              error. Minus maiores inventore veritatis laboriosam in hic alias
              voluptatum? Ullam, quis quos doloribus suscipit debitis iure ex
              consequatur maiores. Qui accusantium nihil veritatis earum
              doloribus error rem, fugit adipisci aperiam omnis et animi beatae
              voluptates, ab cupiditate architecto rerum nemo, explicabo
              quisquam nostrum voluptas pariatur magni facere! Laborum
              aspernatur eum molestias iste dolorum expedita quisquam officia
              error minus enim totam perferendis eligendi animi laboriosam
              voluptatem nam saepe dolore vel, numquam deserunt dicta quas atque
              praesentium maiores. Iure consectetur temporibus voluptate beatae
              aut vero. Adipisci, debitis? Dolor laborum modi deleniti quo,
              facilis nesciunt amet itaque sapiente ipsum doloribus labore
              reiciendis sint nostrum perferendis aperiam beatae? Rerum quas
              quasi ea provident, doloremque aut, fugit earum optio aspernatur
              possimus minima neque dicta! Iste labore laudantium corporis
              eligendi dolor omnis autem a tempore sunt minus accusantium
              excepturi ex debitis cumque officia numquam, ratione, nemo
              distinctio illum in perferendis necessitatibus, aliquam
              doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Doloribus repellat modi tempora, aut voluptatibus eveniet
              deleniti eius atque, expedita soluta beatae possimus cum iure
              necessitatibus sint maxime. Cupiditate, porro accusantium.
              ggggggggg ffffff ffffffffffffg fffffffffff of long long long Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nulla
              cum, sit voluptatem eligendi omnis. Est unde corrupti eum,
              necessitatibus voluptatibus totam, eaque magnam, vitae illum sit
              quo minus explicabo! Illum aliquid cupiditate aliquam asperiores
              eligendi quaerat possimus. Iusto, voluptate sequi molestiae,
              magnam sed totam inventore optio beatae hic cum ipsum deleniti
              quas natus numquam eos corporis blanditiis odit accusamus? A
              possimus aut est expedita, aspernatur quasi quia molestiae,
              voluptatum similique veniam officia vitae quibusdam, qui
              consequatur earum iure dolorem repellendus blanditiis tenetur
              quaerat. Repudiandae quam, sunt praesentium laboriosam provident
              recusandae! Veritatis asperiores at eum quibusdam nisi ipsum
              accusantium pariatur. description
            </p>
            <div className='flex flex-col font-bold  items-end justify-end mt-auto'>
              <p className='text-end'>— главный организатор хардатона,</p>
              <p>Валерий Бизиков</p>
            </div>
          </div>
          <div className='flex max-sm:flex-col justify-between gap-12 md:gap-24  w-full'>
            <PrimaryButton
              bgFilled
              className='!w-full'
              onClick={() => router.push('/hardathons/1/details')}>
              Подробнее
            </PrimaryButton>
            <PrimaryButton className='!w-full' bgFilled>
              Подать заявку
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default HardathonsScreen;
