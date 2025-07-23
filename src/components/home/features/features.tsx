import styles from './features.module.css'
import { Container } from '../../layout/container'
import { Button } from '../../ui/button'
import { FEATURES } from './features.data'

type FeatureTitle = 'Завдання' | 'Проєкти' | 'Документи' | 'Вайтборд'

const CLASSNAMES_MAP: Record<FeatureTitle, string> = {
	Завдання: `${styles['main-block']} ${styles['main-block-1']}`,
	Проєкти: `${styles['main-block']} ${styles['main-block-2']}`,
	Документи: `${styles['main-block']} ${styles['main-block-3']}`,
	Вайтборд: `${styles['main-block']} ${styles['main-block-4']}`,
}

export function Features() {
	return (
		<section className='bg-gradient-to-br from-[#0D002B] to-[#0E0E0E] py-14'>
			<Container>
				<header className='text-center space-y-3'>
					<h2 className='font-bold text-4xl max-sm:text-2xl text-white'>
						Усе, що потрібно команді для ефективної роботи
					</h2>
					<h3 className='font-medium text-lg max-sm:text-base text-white'>
						⚡ Лише потрібні функції — нічого зайвого. Працюйте швидше,
						результативніше та простіше.
					</h3>
					<Button variant='white' className='mt-10'>
						Розкрийте повний потенціал
					</Button>
				</header>
			</Container>
			<section className='flex gap-[30px] h-full pt-[60px]'>
				<div className='grid grid-cols-1 grid-rows-6 overflow-hidden'>
					{Array.from({ length: 6 }, (_, index) => (
						<div
							key={index}
							className={`border border-white rounded-4xl aspect-square flex items-center justify-center text-white text-center h-full`}
						>
							{index + 1}
						</div>
					))}
				</div>
				<div className={styles.parent}>
					{FEATURES.map((feature, index) => (
						<div
							key={index}
							className={
								'border border-white rounded-4xl aspect-square flex items-center justify-center text-white text-center' +
								' ' +
								CLASSNAMES_MAP[feature.title as FeatureTitle]
							}
						>
							{feature.title}
						</div>
					))}
				</div>
			</section>
		</section>
	)
}
