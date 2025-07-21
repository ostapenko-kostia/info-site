import { Container } from '@/components/layout/container'
import { Compare } from '../ui/compare'

export function Efficiency() {
	return (
		<section>
			<Container>
				<header className='text-center space-y-3'>
					<h2 className='font-bold text-4xl max-sm:text-2xl'>Ефективність без ускладнень</h2>
					<h3 className='font-medium text-lg max-sm:text-base'>
						Всі необхідні інструменти в одній системі
					</h3>
				</header>
				<section className='mt-14 w-full aspect-[16/9]'>
					<Compare
						firstImage='/efficiency-image-light.png'
						secondImage='/efficiency-image-dark.png'
						className='!w-full !h-full mx-auto relative'
						firstImageClassName='w-full h-full object-cover'
						secondImageClassname='w-full h-full object-cover'
						slideMode='hover'
					/>
				</section>
			</Container>
		</section>
	)
}
