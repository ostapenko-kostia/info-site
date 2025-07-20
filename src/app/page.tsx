import { Advantages } from '@/components/home/advantages/advantages'
import { Efficiency } from '@/components/home/efficiency'
import { Hero } from '@/components/home/hero'

export default function Home() {
	return (
		<main className='space-y-16'>
			<Hero />
			<Advantages />
			<Efficiency />
		</main>
	)
}
