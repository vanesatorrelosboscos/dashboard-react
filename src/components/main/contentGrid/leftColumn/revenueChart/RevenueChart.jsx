import { useEffect, useRef, useState } from 'react'
import CardHeader from '../../../../ui/card/CardHeader'
import Card from '../../../../ui/card/Card'
import CardBody from '../../../../ui/card/CardBody'

const data = [42, 58, 47, 73, 61, 88, 95, 72, 84, 103, 91, 118];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const BAR_COLOR = '#4F46E5';
const ACCENT_COLOR = '#06B6D4';

function RevenueChart() {
    const canvasRef = useRef(null);
    
    const [tooltip, setTooltip] = useState({ opacity: 0, x: 0, y: 0, text: '' });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');

        function draw() {
            const W = canvas.offsetWidth;
            const H = 200;
            canvas.width = W; 
            canvas.height = H;
            
            const pad = { top: 20, right: 20, bottom: 36, left: 48 };
            const chartW = W - pad.left - pad.right;
            const chartH = H - pad.top - pad.bottom;
            const max = Math.max(...data) * 1.15;
            const barW = (chartW / data.length) * 0.6;
            const gap = (chartW / data.length) * 0.4 / 2;

            ctx.clearRect(0, 0, W, H);

            // Grid lines
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border') || 'rgba(255,255,255,0.08)';
            ctx.lineWidth = 1;
            
            for (let i = 0; i <= 4; i++) {
                const y = pad.top + (chartH / 4) * i;
                ctx.beginPath(); 
                ctx.moveTo(pad.left, y); 
                ctx.lineTo(W - pad.right, y); 
                ctx.stroke();
                
                const val = Math.round(max - (max / 4) * i);
                ctx.fillStyle = '#9CA3AF'; 
                ctx.font = '11px Inter, sans-serif'; 
                ctx.textAlign = 'right';
                ctx.fillText('$' + val + 'k', pad.left - 6, y + 4);
            }

            // Bars
            data.forEach((val, i) => {
                const x = pad.left + i * (chartW / data.length) + gap;
                const bh = (val / max) * chartH;
                const y = pad.top + chartH - bh;

                const grad = ctx.createLinearGradient(0, y, 0, y + bh);
                grad.addColorStop(0, i === 11 ? ACCENT_COLOR : BAR_COLOR);
                grad.addColorStop(1, i === 11 ? 'rgba(6,182,212,0.2)' : 'rgba(79,70,229,0.2)');

                ctx.fillStyle = grad;
                const r = 4;
                ctx.beginPath();
                ctx.moveTo(x + r, y); 
                ctx.lineTo(x + barW - r, y);
                ctx.arcTo(x + barW, y, x + barW, y + r, r);
                ctx.lineTo(x + barW, y + bh); 
                ctx.lineTo(x, y + bh);
                ctx.arcTo(x, y, x + r, y, r);
                ctx.closePath(); 
                ctx.fill();

                // X labels
                ctx.fillStyle = '#9CA3AF'; 
                ctx.font = '11px Inter, sans-serif'; 
                ctx.textAlign = 'center';
                ctx.fillText(labels[i], x + barW / 2, H - 10);
            });
        }

        draw();

        window.addEventListener('resize', draw);
        
        return () => window.removeEventListener('resize', draw);
    }, []); 

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const W = canvas.width;
        
        const pad = { left: 48, right: 20, top: 20, bottom: 36 };
        const chartW = W - pad.left - pad.right;
        const idx = Math.floor((mx - pad.left) / (chartW / data.length));
        
        if (idx >= 0 && idx < data.length) {
            setTooltip({
                opacity: 1,
                x: e.clientX - rect.left - 30,
                y: e.clientY - rect.top - 40,
                text: `${labels[idx]}: $${data[idx]}k`
            });
        } else {
            setTooltip(prev => ({ ...prev, opacity: 0 }));
        }
    };

    const handleMouseLeave = () => {
        setTooltip(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <Card>
            <CardHeader 
                title = "📊 Monthly Revenue"
                className = "badge badge-success"
                text = "Live"
            />
            
            <CardBody>
                <div className="chart-wrap" style={{ position: 'relative', width: '100%' }}>
                    
                    <canvas
                        ref={canvasRef}
                        style={{ width: '100%', height: '200px', display: 'block' }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    ></canvas>

                    <div 
                        className="chart-tooltip" 
                        style={{
                            position: 'absolute',
                            opacity: tooltip.opacity,
                            left: `${tooltip.x}px`,
                            top: `${tooltip.y}px`,
                            pointerEvents: 'none',
                            transition: 'opacity 0.2s ease, left 0.1s ease, top 0.1s ease'
                        }}
                    >
                        {tooltip.text}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default RevenueChart;