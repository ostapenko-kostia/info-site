import { Container } from '@/components/layout/container'
import { Compare } from '../ui/compare'

export function Efficiency() {
	return (
		<section>
			<Container>
				<header className='text-center space-y-3'>
					<h2 className='font-bold text-4xl'>Ефективність без ускладнень</h2>
					<h3 className='font-medium text-lg'>Всі необхідні інструменти в одній системі</h3>
				</header>
				<section className='mt-14 w-full'>
					<Compare
						firstImage='/efficiency-image-light.png'
						secondImage='/efficiency-image-dark.png'
						className='w-full mx-auto h-[80vh]'
						firstImageClassName='object-cover'
						secondImageClassname='object-cover'
						slideMode='hover'
					/>
				</section>
			</Container>
		</section>
	)
}
