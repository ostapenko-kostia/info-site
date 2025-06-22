import { GlobeIcon } from 'lucide-react'
import { Logo } from '../../ui/logo'
import { Container } from '../container'
import { HeaderNav } from './header-nav'
import { Button } from '../../ui/button'

export function Header() {
	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/90'>
			<Container className='py-5 flex items-center justify-between gap-10'>
				<Logo />

				<div className='flex items-center gap-14'>
					<HeaderNav />
					<button>
						<GlobeIcon />
					</button>
					<div className='flex items-center gap-8'>
						<Button>Увійти</Button>
						<Button variant='primary'>Реєстрація</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
